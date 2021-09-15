import fs from 'fs';
import path from "path";
import { connection } from '../config/database';
import logger from '../config/logger';
import { search_User_SQL, add_User_SQL } from './sql';

export const search_User = async(userEmail: String, userToken: String, userSocial: String): Promise<any> => {
    const postdb = await connection.connect();
    const params = [userEmail, userToken, userSocial];
    try {        
        return new Promise((resolve, rejects)=>{
            postdb.query(search_User_SQL, params, (err, res)=>{
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

export const add_User = async(userEmail: String, userNickname: String, userToken: String, userSocial: String): Promise<any> => {
    const postdb = await connection.connect();
    const params = [userEmail, userNickname, userToken, userSocial, null];
    try {
        return new Promise((resolve, rejects)=>{
            postdb.query(add_User_SQL, params, (err, res)=>{
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

export const get_pf_User = async(userEmail: String, userToken: String, userSocial: String): Promise<any> => {
    const postdb = await connection.connect();
    const params = [userEmail, userToken, userSocial];
    try {        
        return new Promise((resolve, rejects)=>{
            postdb.query(search_User_SQL, params, (err, res)=>{
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
