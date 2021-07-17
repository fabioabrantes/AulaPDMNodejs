import {Router} from 'express';
import {CreateUserController} from './controllers/CreateUserController';
import {AuthenticateController} from './controllers/AuthenticateController';
import {CreateTagController} from './controllers/CreateTagController';
import {CreateComplimentController} from './controllers/CreateComplimentController';

import {verifyTokenAuthentication} from './middleware/verifyTokenAuthentication';
import { verifyAdmin } from './middleware/verifyAdim';

const router = Router();

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();




router.post('/users', createUserController.handle);
router.post('/login', authenticateController.handle);

router.post('/tags',verifyTokenAuthentication,verifyAdmin, createTagController.handle);

router.post('/compliments',verifyTokenAuthentication,createComplimentController.handle);

export {router}
