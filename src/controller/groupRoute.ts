import express ,{Request, Response, NextFunction} from 'express';
import router from '../config/route';
import fs from 'fs';
import path from "path";

import logger from '../config/logger';

const GroupRouter = router;

GroupRouter.get('/group', async(req: Request, res: Response, next: NextFunction)=>{
    res.status(200).send({
        message: "GroupRouter hello"
    });
});

GroupRouter.get('/v1/groups', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.get('/v1/group/detail', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.post('/v1/group/add', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.put('/v1/group/liked', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.put('/v1/group/state/edit', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.put('/v1/group/edit', async(req: Request, res: Response, next: NextFunction)=>{

});

GroupRouter.get('/v1/mygroups', async(req: Request, res: Response, next: NextFunction)=>{

});

export default GroupRouter;