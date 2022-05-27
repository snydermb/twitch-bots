import * as express from 'express';
import * as http from 'http';

export const glitchServer = () => {
    const app = express();
    app.use(express.static('public'));
    app.get('/', (_, response) => {
        response.sendFile(__dirname + '/src/views/index.html');
        response.sendStatus(200);
    });
    app.listen(process.env.PORT, () => {
        console.log('Your app is listening on port ' + process.env.PORT);
    });
    setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
};
