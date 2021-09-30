import express ,{Request, Response, NextFunction} from 'express';
import router from '../config/route';

import fs from 'fs';
import path from "path";

import { search_user, add_user, update_user_profile } from '../service/userService';
import logger from '../config/logger';

const UserRouter = router;

UserRouter.get('/user', async(req: Request, res: Response)=>{
    res.status(200).send({
        message: "UserRouter hello"
    });
});

UserRouter.post('/v1/user/login', async(req: Request, res: Response, next: NextFunction)=>{ // 로그인
    // const userSocial: String = JSON.stringify(req.query.user_social).replace(/\"/g,'');
    const userSocial: String = req.query.user_social as String;
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    
    try {
        const result = await search_user(userEmail, userToken, userSocial);
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
        logger.error("POST /v1/user/login",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
});

UserRouter.post('/v1/user/logout', async(req: Request, res: Response, next: NextFunction)=>{ // 로그아웃 세션 destroy

});

UserRouter.get('/v1/user/nickname', async(req: Request, res: Response, next: NextFunction)=>{ // 닉네임 중복 체크

});


UserRouter.post('/v1/user/signup', async (req: Request, res: Response, next: NextFunction)=>{ // 회원가입
    const userSocial: String = req.query.user_social as String;
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    const userNickname: String = req.body.user_nickname;
    logger.info('POST /v1/user/signup userSocial:', userSocial, '/ userEmail: ', userEmail, '/ userToken: ', userToken, '/ userNickname: ', userNickname);
    try {
        const result = await add_user(userEmail, userNickname, userToken, userSocial);
        console.log(result);
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
        logger.error("POST /v1/user/singup",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
});

UserRouter.get('/v1/user/profile', async(req: Request, res: Response, next: NextFunction)=>{ // 세션에서 프로필 정보 가져오기
    // const userSocial: String = JSON.stringify(req.query.user_social).replace(/\"/g,'');
    const userSocial: String = req.query.user_social as String;
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    
    try {
        const result = await search_user(userEmail, userToken, userSocial);
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
        logger.error("GET /v1/user/profile",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
});

UserRouter.put('/v1/user/profile/edit', async(req: Request, res: Response, next: NextFunction)=>{ // 프로필 정보수정 세션에 새로운 정보 업데이트
    // const userSocial: String = JSON.stringify(req.query.user_social).replace(/\"/g,'');
    const userSocial: String = req.query.user_social as String;
    const userEmail: String = req.body.user_email;
    const userToken: String = req.body.user_token;
    const userNickname: String = req.body.user_nickname;
    
    try {
        const result = await update_user_profile(userEmail, userToken, userSocial, userNickname);
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
        logger.error("PUT /v1/user/profile/edit",err);
        res.status(500).send({
            success: false,
            message: "Server Error"
        });
    }
});


export default UserRouter;