import * as repo from '../repositories/authenticationRepository.js';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

export async function register (name: string, email:string, password:string){

	const thereIsUser = await repo.userByEmail(email);
	
	if(thereIsUser.length !== 0) throw {type:401, message:'email already registred'};

	const cryptPassword = bcrypt.hashSync(password, 10);

	await repo.register(name, email, cryptPassword);
     
}

export async function login (email: string, password: string){

	const user = await repo.userByEmail(email);
	
	if(!user) throw {type: 403, message: 'email does not found'};

	const isPassword  = bcrypt.compareSync(password, user[0].password);

	if(!isPassword) throw {type: 403,message:'invalid password'};

	else {
		const token = v4();
		await repo.createSession(user[0].id, token);
		return {token:token};
	}
	
}
