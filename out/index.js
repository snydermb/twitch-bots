"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feanBot_1 = require("./bot/feanBot");
const opts = {
    identity: {
        username: 'feanbot',
        password: 'oauth:auxphevpuepdwlk9vxo6d0hjpfc2ie'
    },
    channels: [
        'colmby'
    ]
};
const feanBot = new feanBot_1.default(opts);
feanBot.start();
//# sourceMappingURL=index.js.map