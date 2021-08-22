import { UserClass_all } from "../models/jsonModel"

export const search_User = (userEmail: String, userToken: String, userSocial: String) => {
    const search_User_res = UserClass_all.find((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean })=>{
        if(item.email == userEmail){
            return item;
        }
    });
    return search_User_res;
}