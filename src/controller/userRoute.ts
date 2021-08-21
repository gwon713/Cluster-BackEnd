import express ,{Request, Response} from 'express';
import router from '../config/route';

const UserRouter = router;

UserRouter.get('/test', (req: Request, res: Response)=>{
    res.status(200).send({
        message: "cex"
    })
});

export default UserRouter;