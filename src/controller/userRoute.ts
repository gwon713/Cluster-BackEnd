import express ,{Request, Response} from 'express';
import router from '../config/route';
import { UserClass_all } from '../models/jsonModel';
import { search_User } from '../repository/userRepo';

const UserRouter = router;

UserRouter.post('/v1/user/login', (req: Request, res: Response)=>{
    const userSocial: String = JSON.stringify(req.query.user_social);
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    
    try {
        const result = search_User(userEmail, userToken, userSocial);
        if(result.length > 0){
            res.status(200).send({
                success: true,
                result : result
            });
        }else{
            res.status(400).send({
                success: false,
                result : null,
                message: "Resource Null"
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Server Error"
        })
    }
    
    
});

export default UserRouter;