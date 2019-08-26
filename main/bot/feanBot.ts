import * as tmi from 'tmi.js';
import CannonManager from '../commands/managers/CannonManager';

export default class FeanBot {
  private client: tmi.Client;
  private cmdMap: Map<string, Function>;
  private cannonManager: CannonManager;

  constructor(opts: any) {
    this.cannonManager = new CannonManager();

    this.cmdMap = new Map();
    this.cmdMap.set('!cannons', () => this.cannonManager.missedCannonsResponse());
    this.cmdMap.set('!cannon', () => this.cannonManager.missedCannonTrigger());

    this.client = tmi.client(opts);
    this.client.on('message', this.onMessageHandler.bind(this));
    this.client.on('connected', this.onConnectedHandler.bind(this));
  }

  start() {
    this.client.connect();
  }

  private onMessageHandler(target, context, msg: string, self) {
    if (!self) {
      const command: string = msg.trim();

      if (this.cmdMap.has(command)) {
        const response = this.cmdMap.get(command)();
        this.client.say(target, response);
        console.log(response);
      }
    }
  }

  private onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
  }
}
