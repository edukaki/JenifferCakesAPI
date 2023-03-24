import Express, { IRouter } from 'express';
import cakes from './cakesRoutes';

const routes = (app: IRouter) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: 'JenifferCakesAPI' });
        app.use(Express.json(), cakes);
    });
};

export default routes;
