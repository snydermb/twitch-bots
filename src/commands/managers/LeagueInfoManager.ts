import { LoLPlusClient } from 'lol-plus'

export class LeagueInfoManager {
    private apiClient: LoLPlusClient;

    constructor() {
        this.apiClient = new LoLPlusClient({
            // Riot API Key
            apiKey: process.env.RIOT_API_KEY,
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
