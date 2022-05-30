import { CannonManager, StaticResponseManager } from '../managers';

export const FeanbotCommandMap = (cannonManager: CannonManager, staticResponseManager: StaticResponseManager) => {
    return {
        'cannons': () => cannonManager.missedCannonsResponse(),
        'cannon': () => cannonManager.missedCannonTrigger(),
        'annie': () => staticResponseManager.annieCommandResponse(),
        'connect': () => staticResponseManager.connectCommandResponse(),
        'rank': () => staticResponseManager.rankCommandResponse(),
        'rules': () => staticResponseManager.rulesCommandResponse(),
        'yone': () => staticResponseManager.yoneCommandResponse()
    };
}