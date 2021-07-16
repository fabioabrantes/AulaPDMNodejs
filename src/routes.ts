import {Router} from 'express';
import {CreateUserController} from './controllers/CreateUserController';
import {AuthenticateController} from './controllers/AuthenticateController';

const router = Router();

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();


router.post('/users', createUserController.handle);
router.post('/login', authenticateController.handle);


export {router}
