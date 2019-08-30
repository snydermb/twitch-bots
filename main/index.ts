import FeanBot from './bot/FeanBot';

const opts = {
  identity: {
    username: 'feanbot',
    password: 'oauth:auxphevpuepdwlk9vxo6d0hjpfc2ie'
  },
  channels: [
    'feaniks', 'colmby'
  ]
};

const feanbot = new FeanBot(opts);
feanbot.start();