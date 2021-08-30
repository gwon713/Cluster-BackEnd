import { ClassData_User, ClassData_Group, ClassData_GroupLike } from '../../config/dataMapping';

let UserClass_all: any
let GrpClass_all: any
let GrpLikeClass_all: any

export const creat_jsonModel = ()=>{
    UserClass_all = ClassData_User();
    GrpClass_all = ClassData_Group();
    GrpLikeClass_all = ClassData_GroupLike();
}

export {UserClass_all}
export {GrpClass_all}
export {GrpLikeClass_all}

