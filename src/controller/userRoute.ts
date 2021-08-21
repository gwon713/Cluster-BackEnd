import express ,{Request, Response} from 'express';
import router from '../config/route';
import { UserClass } from '../models/jsonModel';

const UserRouter = router;

UserRouter.get('/test', (req: Request, res: Response)=>{
    res.status(200).send({
        message: UserClass
    })
});

export default UserRouter;