import { CannonManager, StaticResponseManager, LeagueInfoManager } from '../managers';
import { FeanbotCommandMap } from '../maps';

export class FeanbotCommandHandler {
    private cmdMap;
    private cannonManager: CannonManager;
    private staticResponseManager: StaticResponseManager;
    private leagueInfoManager: LeagueInfoManager;

    constructor() {
        this.cannonManager = new CannonManager();
        this.staticResponseManager = new StaticResponseManager();
        this.leagueInfoManager = new LeagueInfoManager();
        this.cmdMap = FeanbotCommandMap(this.cannonManager, this.staticResponseManager, this.leagueInfoManager);
    }

    hasCommand(command: string): boolean {
        return Object.keys(this.cmdMap).includes(command);
    }

    async executeCommand(command: string): Promise<string> {
        return this.cmdMap[command]();
    }
}