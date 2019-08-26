"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CannonManager {
    constructor() {
        this.missedCannons = 0;
    }
    missedCannonTrigger() {
        console.log("missed cannons trigger!");
        this.missedCannons++;
        return this.missedCannonsResponse();
    }
    missedCannonsResponse() {
        console.log(`Feaniks has missed ${this.missedCannons} cannons today!`);
        return (`Feaniks has missed ${this.missedCannons} cannons today!`);
    }
}
exports.default = CannonManager;
//# sourceMappingURL=CannonManager.js.map