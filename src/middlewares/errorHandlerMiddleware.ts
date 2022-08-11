import { Request, Response, NextFunction} from "express";


export default function errorHandler(error, req: Request, res: Response,next: NextFunction){
    
    console.log('Erroror:', error);

    if(error){
        return res.status(error.type).send(error.message);
    }

}