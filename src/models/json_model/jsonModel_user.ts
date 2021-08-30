import fs from 'fs';
import path from "path";

const fs_userJSONData = fs.readFileSync(path.join(__dirname, '../../../data/user.json'), 'utf8');
const userJSONData: Object[] = JSON.parse(fs_userJSONData);
export {userJSONData} 