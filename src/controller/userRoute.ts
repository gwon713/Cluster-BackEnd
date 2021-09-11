import express ,{Request, Response} from 'express';
import router from '../config/route';

import fs from 'fs';
import path from "path";

import { search_User, add_User } from '../service/userService';
import logger from '../config/logger';


const UserRouter = router;

UserRouter.get('/', async(req: Request, res: Response)=>{
    res.status(200).send({
        message: "hello"
    });
});

UserRouter.post('/v1/user/login', async(req: Request, res: Response)=>{    
    const userSocial: String = JSON.stringify(req.query.user_social);
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    
    try {
        const result:any = await search_User(userEmail, userToken, userSocial);
        // console.log(result.rows);
        // console.log(result.rowCount);
        if(result.rowCount > 0){
            res.status(200).send({
                success: true,
                result : result.rows
            });
        }else{
            res.status(400).send({
                success: false,
                message: "Resource Null"
            });
        } 
    } catch (err) {      
        logger.error("/v1/user/login",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
});

UserRouter.post('/v1/user/signup', async (req: Request, res: Response)=>{
    const userSocial: String = JSON.stringify(req.query.user_social);
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    const userNickname: String = req.body.user_nickname;

    const res_add_User = add_User(userEmail, userNickname, userToken, userSocial);
    
    res.status(200).send({
        success: true,
        result: res_add_User
    });
});

export default UserRouter;