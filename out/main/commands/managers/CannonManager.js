"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CannonManager {
    constructor() {
        this.missedCannons = 0;
    }
    missedCannonTrigger() {
        this.missedCannons++;
        return this.missedCannonsResponse();
    }
    missedCannonsResponse() {
        return `Feaniks has missed ${this.missedCannons} cannons today!`;
    }
}
exports.default = CannonManager;
//# sourceMappingURL=CannonManager.js.map