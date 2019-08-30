"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmi = require("tmi.js");
const CannonManager_1 = require("../commands/managers/CannonManager");
class FeanBot {
    constructor(opts) {
        this.cannonManager = new CannonManager_1.default();
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
    onMessageHandler(target, context, msg, self) {
        if (!self) {
            const command = msg.trim();
            if (this.cmdMap.has(command)) {
                const response = this.cmdMap.get(command)();
                this.client.say(target, response);
                console.log(response);
            }
        }
    }
    onConnectedHandler(addr, port) {
        console.log(`* Connected to ${addr}:${port}`);
    }
}
exports.default = FeanBot;
//# sourceMappingURL=FeanBot.js.map