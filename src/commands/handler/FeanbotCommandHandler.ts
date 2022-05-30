import { CannonManager, StaticResponseManager } from '../managers';
import { FeanbotCommandMap } from '../maps';

export class FeanbotCommandHandler {
    private cmdMap;
    private cannonManager: CannonManager;
    private staticResponseManager: StaticResponseManager;

    constructor() {
        this.cannonManager = new CannonManager();
        this.staticResponseManager = new StaticResponseManager();
        this.cmdMap = FeanbotCommandMap(this.cannonManager, this.staticResponseManager);
    }

    hasCommand(command: string): boolean {
        return Object.keys(this.cmdMap).includes(command);
    }

    executeCommand(command: string): string {
        return this.cmdMap[command]();
    }
}