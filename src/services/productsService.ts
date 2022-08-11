import * as repoProduct from '../repositories/productsRepository.js';
import * as auth from '../repositories/authenticationRepository.js';

export async function create(product: repoProduct.Product, token: string){

	const userId = await findUserId(token);
	
	await repoProduct.create(product, userId);

	const createdProduct = await repoProduct.findProduct(product, userId);
	
	return createdProduct[0];

}

export async function findAll(token: string){

	const userId = await findUserId(token);

	const allProducts = await repoProduct.findAll(userId);
	
	return allProducts;
}

export async function stockUpdate( productId: string, newValue: string, token: string){

	const userId = await findUserId(token);

	await repoProduct.stockUpdate(Number(productId), Number(newValue), userId);
	
	const productUpdated = await repoProduct.findUpdated(Number(productId), Number(newValue), userId);

	return productUpdated;
}

export async function productDelete (productId: string, token: string){

	const userId = await findUserId(token);

	await repoProduct.productDelete(Number(productId), userId);
    
}

export async function findById(id: string,token: string){

	const userId = await findUserId(token);

	const product = await repoProduct.findById(Number(id), userId);
	
	if(!product) throw { type: 404, message:'product not found' };

	return product[0];
}

async function findUserId(token: string){

	const user = await auth.userByToken(token) as {userId:null};
	
	if(!user) throw{type:401, message:'token does not exist'};

	return Number(user.userId);
}