import express ,{Request, Response} from 'express';
import router from '../config/route';
import { UserClass_all } from '../models/jsonModel';
import { search_User } from '../repository/userRepo';

const UserRouter = router;

UserRouter.post('/v1/user/login', (req: Request, res: Response)=>{
    const userSocial: String = JSON.stringify(req.query.user_social);
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    
    const result = search_User(userEmail, userToken, userSocial);
    res.status(200).send({
        result : result
    })
});

export default UserRouter;