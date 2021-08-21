import { ClassData_User, ClassData_Group, ClassData_GroupLike } from '../config/dataMapping';

let UserClass: any
let GrpClass: any
let GrpLikeClass: any

export const creat_jsonModel = ()=>{
    UserClass = ClassData_User();
    GrpClass = ClassData_Group();
    GrpLikeClass = ClassData_GroupLike();
}

export {UserClass}
export {GrpClass}
export {GrpLikeClass}

