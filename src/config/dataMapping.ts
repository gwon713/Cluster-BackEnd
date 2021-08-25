import { User } from '../models/user';
import { Group } from '../models/group/group';
import { GroupLike } from '../models/group/group_like';
import { Code } from '../models/common/code';
import { Code_detail } from '../models/common/code_detail';
const userJSONData = require('../../data/user.json');
const codeJSONData = require('../../data/code.json');
const code_detailJSONData = require('../../data/code_detail.json');

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

export const ClassData_Code = (): Code[]=>{
    let CodeData : Code[] = [];
    codeJSONData.forEach((item: { code_id: String, code_name: String, code_etc: String, use_at: boolean }) => {
        CodeData.push(new Code(item.code_id, item.code_name, item.code_etc, item.use_at));
    });
    return CodeData;
}

export const ClassData_Code_detail = (): Code_detail[]=>{
    let Code_detailData : Code_detail[] = [];
    code_detailJSONData.forEach((item: { code_id: String, code_detail_id: String, code_detail_name: String, code_detail_etc: String, use_at: boolean }) => {
        Code_detailData.push(new Code_detail(item.code_id, item.code_detail_id, item.code_detail_name, item.code_detail_etc, item.use_at));
    });
    return Code_detailData;
}