import { Router } from 'express';
import { login, userRegister } from '../controllers/authenticationController.js';


const authentication = Router();

authentication.post('/register', userRegister );
authentication.post('/login', login);


export default authentication;

