import {Router, Request, Response} from 'express';
import * as Apicontrollers from './controllers/Apicontrollers';

const router = Router();

router.get('/ping', Apicontrollers.ping);
router.get('/',Apicontrollers.home);
router.post('/create',Apicontrollers.createNewUser);
router.post('/', Apicontrollers.homePost);




export default router;

