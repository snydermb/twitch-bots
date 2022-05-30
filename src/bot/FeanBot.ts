import * as tmi from 'tmi.js';
import { FeanbotCommandHandler } from '../commands/handler';

export default class FeanBot {
  private client: tmi.Client;
  private commandHandler: FeanbotCommandHandler;

  constructor(opts: any) {
    this.commandHandler = new FeanbotCommandHandler();

    this.client = tmi.client(opts);
    this.client.on('message', this.onMessageHandler.bind(this));
    this.client.on('connected', this.onConnectedHandler.bind(this));
  }

  start() {
    this.client.connect();
  }

  private onMessageHandler(target, context, msg: string, self) {
    if (!self && msg.startsWith('!')) {
      const args = msg.trim().slice(1).split(' ');
      const command = args.shift();

      if (this.commandHandler.hasCommand(command)) {
        const response = this.commandHandler.executeCommand(command);
        this.client.say(target, response);
        console.log(response);
      }
    }
  }

  private onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
}
