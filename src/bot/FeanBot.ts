import * as tmi from 'tmi.js';
import { CannonManager } from '../commands/managers';
import { StaticResponseManager } from '../commands/managers';

export default class FeanBot {
  private client: tmi.Client;
  private cmdMap: Map<string, Function>;
  private cannonManager: CannonManager;
  private staticResponseManager: StaticResponseManager;

  constructor(opts: any) {
    this.cannonManager = new CannonManager();
    this.staticResponseManager = new StaticResponseManager();

    this.cmdMap = new Map();
    this.cmdMap.set('!cannons', () => this.cannonManager.missedCannonsResponse());
    this.cmdMap.set('!cannon', () => this.cannonManager.missedCannonTrigger());
    this.cmdMap.set('!annie', () => this.staticResponseManager.annieCommandResponse());
    this.cmdMap.set('!connect', () => this.staticResponseManager.connectCommandResponse());
    this.cmdMap.set('!rank', () => this.staticResponseManager.rankCommandResponse());
    this.cmdMap.set('!rules', () => this.staticResponseManager.rulesCommandResponse());
    this.cmdMap.set('!yone', () => this.staticResponseManager.yoneCommandResponse());

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
