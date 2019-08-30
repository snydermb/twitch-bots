import * as express from 'express';
import * as http from 'http';

const glitchServer = () => {
    const app = express();
    app.use(express.static('public'));
    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/main/views/index.html');
        response.sendStatus(200);
    });
    app.listen(process.env.PORT, () => {
        console.log('Your app is listening on port ' + process.env.PORT);
    });
    setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
};

export default glitchServer;