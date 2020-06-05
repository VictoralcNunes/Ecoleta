import express from 'express';
import PointsCrontroller from './controllers/PointsController';
import ItensController from './controllers/ItensController';

const routes = express.Router();
const pointsController = new PointsCrontroller;
const itensController = new ItensController;

// LISTAR ITENS
routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;

