import { LoLPlusClient } from 'lol-plus'

export class LeagueInfoManager {
    private apiClient: LoLPlusClient;

    constructor() {
        this.apiClient = new LoLPlusClient({
            // Riot API Key
            apiKey: 'RGAPI-46973e74-bbd9-4380-a1ff-75aca9651639',
            // Game Platform, Used to choose API Endpoint
            // Full List Could be found at Riot API Documention
            gamePlatform: 'NA1', 
            // Game Region, Used to get DataDragon Realm Information
            gameRegion: 'NA',
          });
    }

    async getSummonerInfo() {
        const result = await this.apiClient.summoner.getSummonerByName('Kid Fean');
        const summInfo = `${result.name} is currently level ${result.summonerLevel}!`;
        console.log(summInfo);
        return summInfo;
    }
}