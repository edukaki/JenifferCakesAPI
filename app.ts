import Express from 'express';
import db from './src/config/dbConnect';
import routes from './src/routes';

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
    console.log('Connection successfull');
});

const app = Express();
app.use(Express.json());
routes(app);

export default app;
