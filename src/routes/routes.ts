import {Router, Request, Response} from 'express';
import * as Apicontrollers from '../controllers/Apicontrollers';

const router = Router();

router.get('/ping', Apicontrollers.ping);
router.get('/',Apicontrollers.home);
router.get('/sobre', Apicontrollers.sobre);



export default router;

