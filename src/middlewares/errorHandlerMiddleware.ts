import { Request, Response } from 'express';


export default function errorHandler(error, req: Request, res: Response){
    
	console.log('Erroror:', error);

	if(error){
		return res.status(error.type).send(error.message);
	}

}