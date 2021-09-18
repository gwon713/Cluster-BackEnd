import fs from 'fs';
import path from "path";
import { connection } from '../config/database';
import logger from '../config/logger';
import { search_user_SQL, add_user_SQL } from './sql';

export const search_user = async(userEmail: String, userToken: String, userSocial: String): Promise<any> => { // DB 유저 조회
    const postdb = await connection.connect();
    const params = [userEmail, userToken, userSocial];
    try {        
        return new Promise((resolve, rejects)=>{
            postdb.query(search_user_SQL, params, (err, res)=>{
                if(err){
                    rejects(err);
                }
                resolve(res);
            });
        })
    } catch (err) {
        throw err;
    } finally {
        postdb.release();
    }
}

export const add_user = async(userEmail: String, userNickname: String, userToken: String, userSocial: String): Promise<any> => { // DB 유저 추가
    const postdb = await connection.connect();
    const params = [userEmail, userNickname, userToken, userSocial, null];
    try {
        return new Promise((resolve, rejects)=>{
            postdb.query(add_user_SQL, params, (err, res)=>{
                if(err){
                    rejects(err);
                }
                resolve(res);
            });
        })
    } catch (err) {
        throw err;
    } finally {
        postdb.release();
    }
}

export const user_profile_update = async(userEmail: String, userToken: String, userSocial: String): Promise<any> => { // DB 프로필 업데이트
    const postdb = await connection.connect();
    const params = [userEmail, userToken, userSocial];
    try {        
        return new Promise((resolve, rejects)=>{
            postdb.query(search_user_SQL, params, (err, res)=>{
                if(err){
                    rejects(err);
                }
                resolve(res);
            });
        })
    } catch (err) {
        throw err;
    } finally {
        postdb.release();
    }
}

export const user_encryption_pwd = async()=> { // 비밀번호 암호화 

}