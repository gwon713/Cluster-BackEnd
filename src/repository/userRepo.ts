import { UserClass_all } from "../models/json_model/jsonModel"
import fs from 'fs';
import path from "path";
import { get_userJSONData } from "../models/json_model/jsonModel_user";
import { connection } from '../config/database';
import logger from '../config/logger';
import { search_User_SQL } from "../config/sql";


export const search_User = async(userEmail: String, userToken: String, userSocial: String) => {
    // return UserClass_all.find((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean })=>{
    //     if(item.email == userEmail&&item.token==userToken){
    //         console.log(item);     
    //         return item;
    //     }
    // });
    const postdb = await connection.connect();
    const params = [userEmail, userToken, userSocial];
    try {
        const result = await postdb.query(search_User_SQL, params); // select * from "ddudoSchema"."user" where user_email = ? and user_token = ? and user_social = ? and user_deleted = false ;
        logger.info(result.rows);
        return result.rows;
    } catch (err) {
        logger.error(JSON.stringify(err));
        return "ERROR";
    } finally {
        await postdb.release();
    }
}

export const add_User = (user_data: Object) => {
    const user_json: any = get_userJSONData();
    console.log(user_json);
    console.log(user_data);
    
    const updateUserData = user_json.users.push(user_data);
    
    fs.writeFileSync(path.join(__dirname, '../../data/user.json'), JSON.stringify(updateUserData.toString()));
    return fs.readFileSync(path.join(__dirname, '../../data/user.json'));
}
