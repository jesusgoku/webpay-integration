import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import * as handlers from './handlers';

const routes = Router();

routes.get('/', asyncHandler(handlers.home));
routes.post('/transbank/return', asyncHandler(handlers.transactionReturn));
routes.post('/transbank/final', asyncHandler(handlers.transactionFinal));

routes.use(handlers.errorHandler);

export default routes;
