import express ,{Request, Response} from 'express';
import router from '../config/route';
import fs from 'fs';
import path from "path";

import logger from '../config/logger';

const GroupRouter = router;

GroupRouter.get('/group', async(req: Request, res: Response)=>{
    res.status(200).send({
        message: "GroupRouter hello"
    });
});

export default GroupRouter;