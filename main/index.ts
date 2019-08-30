import twitchConfig from './config/twitchConfig';
import FeanBot from './bot/FeanBot';
import glitchServer from './server/glitchServer';

glitchServer();

const feanbot = new FeanBot(twitchConfig);
feanbot.start();