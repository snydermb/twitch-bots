import { CannonManager, StaticResponseManager, LeagueInfoManager } from '../managers';

export const FeanbotCommandMap = (cannonManager: CannonManager, staticResponseManager: StaticResponseManager, leagueInfoManager: LeagueInfoManager) => {
    return {
        'cannons': () => cannonManager.missedCannonsResponse(),
        'cannon': () => cannonManager.missedCannonTrigger(),
        'annie': () => staticResponseManager.annieCommandResponse(),
        'connect': () => staticResponseManager.connectCommandResponse(),
        'rank': () => staticResponseManager.rankCommandResponse(),
        'rules': () => staticResponseManager.rulesCommandResponse(),
        'yone': () => staticResponseManager.yoneCommandResponse(),
        'summonerinfo': () => leagueInfoManager.getSummonerInfo()
    };
}