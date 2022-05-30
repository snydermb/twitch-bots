# twitch-omnibot

This is the repository for my twitch IRC chatbots, primarily feanbot at the moment.

Server is run/hosted on glitch.com - https://glitch.com/~twitch-bots

Account for testing of bot (locally via npm start) has been created with user omnibottest @twitch.tv.

## DEBUG

```
node_modules\tmi.js\lib\commands.js:342
                if((message.startsWith('.') && !message.startsWith('..')) || message.startsWith('/') || message.startsWith('\\')) {
              ^
TypeError: message.startsWith is not a function
```

You probably forgot to call the function being called with the command somewhere - 
PREVIOUS FIX: `return this.cmdMap[command];` => `return this.cmdMap[command]();`