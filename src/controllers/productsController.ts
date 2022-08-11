import { Request, Response } from 'express';
import * as service from '../services/productsService.js';
import { Product } from '../repositories/productsRepository.js';

export async function create(req: Request, res: Response){

	const { token } = req.headers;
	
	const product = req.body as Product;
	
	const insertedProduct = await service.create(product, String(token));
	
	res.send(insertedProduct).status(201);

}

export async function allProducts(req: Request, res: Response){
	
	const { token } = req.headers;
	
	const products = await service.findAll(String(token));
	
	res.status(200).json(products);

}

export async function stockUpdate (req: Request, res: Response){

	const { token } = req.headers;

	const { productId, newStock } = req.params;

	const updated = await service.stockUpdate( productId, newStock , String(token));

	res.send(updated).status(201);

}

export async function productDelete (req: Request, res: Response){

	const { token } = req.headers;

	const { productId } = req.params;

	await service.productDelete(productId, String(token));

	res.send({response:'deleted'}).status(201);


}

export async function productById(req: Request, res:Response){

	const { token } = req.headers;

	const { productId } = req.params;

	const product = await service.findById(productId, String(token));

	res.send(product).status(200);


}