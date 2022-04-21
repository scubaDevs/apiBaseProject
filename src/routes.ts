import {Router} from 'express';
import * as ApiControllers from './controllers/ApiControllers';
import * as AuthControllers from './controllers/AuthControllers';
import { Auth } from './middlewares/auth';


const router = Router();


router.get('/ping', ApiControllers.ping);
router.get('/',ApiControllers.home);
router.get('/sobre', Auth.privateRoute , ApiControllers.sobre);
router.post('/signup', AuthControllers.signup);
router.post('/login', AuthControllers.login);






export default router;

