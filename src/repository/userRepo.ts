import { UserClass_all } from "../models/jsonModel"
const userJSONData = require('../../data/user.json');

console.log(userJSONData.length);

export const search_User = (userEmail: String, userToken: String, userSocial: String) => {
    const search_User_res = UserClass_all.find((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean })=>{
        if(item.email == userEmail){
            return item;
        }
    });
    return search_User_res;
}

export const add_User = (user_data: Object) => {
    userJSONData.push(user_data);
}