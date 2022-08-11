import { Router } from 'express';
import { allProducts, create, productDelete, stockUpdate, productById } from '../controllers/productsController.js';

const productRouter = Router();

productRouter.post('/create', create);
productRouter.get('/allProducts', allProducts);
productRouter.get('/productById/:productId', productById);
productRouter.patch('/stockUpdate/:productId/:newStock', stockUpdate);
productRouter.delete('/productDelete/:productId',productDelete);

export default productRouter;