import FeanBot from './bot/feanBot';

const opts = {
  identity: {
    username: 'feanbot',
    password: 'oauth:auxphevpuepdwlk9vxo6d0hjpfc2ie'
  },
  channels: [
    'colmby'
  ]
};

const feanBot = new FeanBot(opts);
feanBot.start();