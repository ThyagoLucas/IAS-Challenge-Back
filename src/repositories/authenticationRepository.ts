import db from '../../database.js';

export interface User {
    id:number;
    fullName: string;
    email: string;
    password:string;
}

export async function register (name: string, email: string, password:string){

	await db.query(`
        INSERT INTO "user" ("fullName", "email", "password")
        VALUES ($1, $2, $3)
    `, [name, email, password]);
}

    
export async function userByEmail(email: string){

	const user = await db.query<User>(`
        SELECT * FROM "user" WHERE email = $1
    `,[email]);

	return user.rows;
}

export async function userByToken(token:string){
	const user = await db.query('SELECT * FROM session WHERE token = $1', [token]);

	return user.rows[0];
}

export async function createSession(userId:number, token:string){

	await db.query(`
        INSERT INTO "session" ("userId", "token")
        VALUES ($1, $2)
    `, [userId, token]);
}

