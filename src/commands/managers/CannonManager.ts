export class CannonManager {
    private missedCannons: number;

    constructor(missedCannons = 0) {
        this.missedCannons = missedCannons;
    }

    missedCannonTrigger(): String {
        this.missedCannons++;
        return this.missedCannonsResponse();
    }

    missedCannonsResponse(): String {
        return (`Kid Fean has missed ${this.missedCannons} ${this.missedCannons === 1 ? 'cannon' : 'cannons'} today!`);
    }
}