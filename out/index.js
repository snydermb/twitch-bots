"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glitchInit_1 = require("./init/glitchInit");
const FeanBot_1 = require("./bot/FeanBot");
const opts = {
    identity: {
        username: 'feanbot',
        password: 'oauth:auxphevpuepdwlk9vxo6d0hjpfc2ie'
    },
    channels: [
        'feaniks', 'colmby'
    ]
};
glitchInit_1.glitchInit();
const feanbot = new FeanBot_1.default(opts);
feanbot.start();
//# sourceMappingURL=index.js.map