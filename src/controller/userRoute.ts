import express ,{Request, Response} from 'express';
import router from '../config/route';

import fs from 'fs';
import path from "path";

import { UserClass_all } from '../models/json_model/jsonModel';
import { search_User, add_User } from '../repository/userRepo';
import { userJSONData } from '../models/json_model/jsonModel_user';


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
        const result = await search_User(userEmail, userToken, userSocial);        
        if(JSON.stringify(result).length > 0){
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

UserRouter.post('/v1/user/signup', (req: Request, res: Response)=>{
    const userSocial: String = JSON.stringify(req.query.user_social);
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    const userNickname: String = req.body.user_nickname;
    const dateTime = new Date();

    const userJSON_form = {
        seq: userJSONData.length,
        email: userEmail,
        nickname: userNickname,
        token: userToken,
        social: userSocial,
        file: "",
        login_time: dateTime,
        edit_time: dateTime,
        join_time: dateTime,
        deleted: 0
    }
    const fs_res_add_User = add_User(userJSON_form);
    
    res.status(200).send({
        success: true,
        result: userJSON_form,
        total: fs_res_add_User
    });
});

export default UserRouter;