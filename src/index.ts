import {feanbotTwitchConfig, debugTwitchConfig} from './config';
import FeanBot from './bot/FeanBot';
import {glitchServer} from './server';

glitchServer();

const feanbot = new FeanBot(feanbotTwitchConfig);
feanbot.start();
