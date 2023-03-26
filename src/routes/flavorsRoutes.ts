import Express, { IRouter } from 'express';
import FlavorsController from '../controllers/flavorsController';

const router: IRouter = Express.Router();

router
    .get('/flavors', FlavorsController.getAllFlavors)
    .get('/flavors/:_id', FlavorsController.getFlavorById)
    .post('/flavors/', FlavorsController.insertNewFlavor)
    .put('/flavors/:_id', FlavorsController.updateFlavor)
    .delete('/flavors/:_id', FlavorsController.deleteFlavor);

export default router;
