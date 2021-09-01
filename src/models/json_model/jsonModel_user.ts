import fs from 'fs';
import path from "path";

export const get_userJSONData = (): Object[] =>{
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../../../data/user.json'), 'utf8'));
}