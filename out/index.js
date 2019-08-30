"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twitchConfig_1 = require("./config/twitchConfig");
const FeanBot_1 = require("./bot/FeanBot");
const glitchServer_1 = require("./server/glitchServer");
glitchServer_1.default();
const feanbot = new FeanBot_1.default(twitchConfig_1.default);
feanbot.start();
//# sourceMappingURL=index.js.map