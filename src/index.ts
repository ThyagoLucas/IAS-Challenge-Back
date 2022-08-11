import Express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import routers from './routes/routers.js';
import errorHandler from './middlewares/errorHandlerMiddleware.js';

dotenv.config();

const server = Express();

server.use(cors());
server.use(json());
server.use(routers);
server.use(errorHandler);

const port = process.env.PORT;

server.listen(port, ()=>{
	console.log(`Server is ranning on port ${port}`);
});