import { Router } from 'express';
import authentication from './authenticationRouter.js';
import productRouter from './productRouter.js';



const routers = Router();

routers.use(authentication);
routers.use(productRouter);


export default routers;
