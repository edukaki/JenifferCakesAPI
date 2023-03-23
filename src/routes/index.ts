import Express, { Express as ExpressType } from 'express';

const routes = (app: ExpressType) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: 'JenifferCakesAPI' });
        app.use(Express.json());
    });
};

export default routes;
