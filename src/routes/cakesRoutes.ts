import Express, { IRouter } from 'express';
import CakesController from '../controllers/cakesController';

const router: IRouter = Express.Router();

router
    .get('/cakes', CakesController.getAllCakes)
    .post('/cakes/', CakesController.insertNewCake)
    .put('/cakes/:_id', CakesController.updateCake)
    .delete('/cakes/:_id', CakesController.deleteCake);

export default router;
