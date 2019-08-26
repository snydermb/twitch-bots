"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CannonManager {
    constructor(missedCannons = 0) {
        this.missedCannons = missedCannons;
    }
    missedCannonTrigger() {
        this.missedCannons++;
        return this.missedCannonsResponse();
    }
    missedCannonsResponse() {
        return (`Feaniks has missed ${this.missedCannons} ${this.missedCannons === 1 ? 'cannon' : 'cannons'} today!`);
    }
}
exports.default = CannonManager;
//# sourceMappingURL=CannonManager.js.map