import { Request, Response } from 'express';
import * as service from '../services/authenticationService.js';

export async function userRegister(req: Request, res: Response){

	const { name, email, password } = req.body;
    
	await service.register(name, email, password);

	res.send({msg:'created'}).status(201);

}

export async function login(req: Request, res: Response){

	const { email, password } = req.body;
	
	const token = await service.login(email, password);

	res.send(token).status(200);

}