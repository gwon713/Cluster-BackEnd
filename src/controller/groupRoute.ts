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

GroupRouter.get('/v1/groups', async(req: Request, res: Response)=>{

});

GroupRouter.get('/v1/group/detail', async(req: Request, res: Response)=>{

});

GroupRouter.post('/v1/group/add', async(req: Request, res: Response)=>{

});

GroupRouter.put('/v1/group/liked', async(req: Request, res: Response)=>{

});

GroupRouter.put('/v1/group/state/edit', async(req: Request, res: Response)=>{

});

GroupRouter.put('/v1/group/edit', async(req: Request, res: Response)=>{

});

GroupRouter.get('/v1/mygroups', async(req: Request, res: Response)=>{

});

export default GroupRouter;