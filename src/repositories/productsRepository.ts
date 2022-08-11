import db from '../../database.js';


export interface Product {
    id?:number;
    userid:number;
    name: string;
    price: number;
    stock:number;
}

export async function create(product: Product, userId: number){

	const { name, price, stock } = product;
    
	const teste = await db.query(`
        INSERT INTO "product" ("name", "price", "stock", "userId")
        VALUES ($1, $2, $3, $4)
    `, [name, price, stock, userId]);

	return teste.rows;
}

export async function findAll(userId: number){

	const products = await db.query('SELECT * FROM "product" WHERE "userId"= $1',[userId]);

	return products.rows;
}

export async function stockUpdate(productId: number, newValue: number, userId: number){

	return await db.query(`
    UPDATE product
      SET "stock" = $1
    WHERE id = $2 AND "userId" = $3
  `, [newValue, productId, userId] );

}

export async function productDelete(productId: number, userId: number){

	await db.query(`
    DELETE FROM "product" WHERE id = $1 AND "userId" = $2
  `,[ productId, userId]);
  
}

export async function findProduct(product: Product, userId: number ){
	
	const findedProduct = await db.query(`
    SELECT * FROM "product" WHERE name = $1 AND "userId" = $2;
  `, [product.name, userId]);

	return findedProduct.rows;
}

export async function findById(id: number, userId: number){

	const product = await db.query('SELECT * FROM "product" WHERE id = $1 AND "userId" = $2',[id, userId]);

	return product.rows;
}

export async function findUpdated(productId: number, newStok: number, userId: number){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

	const product = await db.query('SELECT * FROM "product" WHERE id = $1 AND stock = $2 AND "userId" = $3',[productId, newStok, userId]);

	return product.rows[0];
  
}