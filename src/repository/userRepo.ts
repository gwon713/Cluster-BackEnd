import { UserClass_all } from "../models/jsonModel"
import fs from 'fs';

const userJSONData = require('../../data/user.json');

export const search_User = (userEmail: String, userToken: String, userSocial: String) => {
    return UserClass_all.find((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean })=>{
        if(item.email == userEmail&&item.token==userToken){
            console.log(item);     
            return item;
        }
    });
}

export const add_User = (user_data: Object) => {
    const updateUserData = userJSONData.push(user_data);
}