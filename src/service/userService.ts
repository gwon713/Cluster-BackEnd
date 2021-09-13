import fs from 'fs';
import path from "path";
import { connection } from '../config/database';
import logger from '../config/logger';
import { search_User_SQL } from "../config/sql";

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

export const add_User = async(userEmail: String, userNickname: String, userToken: String, userSocial: String) => {
    const postdb = await connection.connect();
    const params = [userEmail, userNickname, userToken, userSocial]
    try {
        const result = await postdb.query(search_User_SQL, params); 
        logger.info(result.rows);
        return result.rows;
    } catch (err) {
        logger.error(JSON.stringify(err));
        return "ERROR";
    } finally {
        await postdb.release();
    }
}
