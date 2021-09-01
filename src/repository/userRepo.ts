import { UserClass_all } from "../models/json_model/jsonModel"
import fs from 'fs';
import path from "path";
import { get_userJSONData } from "../models/json_model/jsonModel_user";


export const search_User = (userEmail: String, userToken: String, userSocial: String) => {
    return UserClass_all.find((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean })=>{
        if(item.email == userEmail&&item.token==userToken){
            console.log(item);     
            return item;
        }
    });
}

export const add_User = (user_data: Object) => {
    const user_json: any = get_userJSONData();
    console.log(user_json);
    console.log(user_data);
    
    const updateUserData = user_json.users.push(user_data);
    
    fs.writeFileSync(path.join(__dirname, '../../data/user.json'), JSON.stringify(updateUserData.toString()));
    return fs.readFileSync(path.join(__dirname, '../../data/user.json'));
}
