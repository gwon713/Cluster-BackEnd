import { User } from '../models/user';
import { Group } from '../models/group/group';
import { GroupLike } from '../models/group/group_like';
const userJSONData = require('../../data/user.json');

export const ClassData_User = (): User[]=>{
    let UserData : User[] = []; 
    userJSONData.forEach((item: { seq: Number, email: String, nickname: String, token: String, social: String, file: String, login_time: String, edit_time: String, join_time: String, deleted: Boolean }) => {
        UserData.push(new User(item.seq, item.email, item.nickname, item.token, item.social, item.file, item.login_time, item.edit_time, item.join_time, item.deleted));
    });
    return UserData;
}

export const ClassData_Group = (): Group[]=>{
    let GroupData : Group[] = []; 

    return GroupData;
}

export const ClassData_GroupLike = (): GroupLike[]=>{
    let GroupLikeData : GroupLike[] = []; 

    return GroupLikeData;
}
