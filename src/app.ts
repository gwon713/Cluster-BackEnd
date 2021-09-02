import express from "express";
import { connection } from "./config/database";
import logger from './config/logger';
import morganMiddleware from './config/morgan';
import router from './config/route';
import UserRouter from './controller/userRoute';
import CorsOptions from 'cors';
export class App{
    public app;

    constructor(){
        this.app = express();
        this.setMiddleware();
        this.setExpress();
        this.setRouter();
    }

    private setExpress() : void {
        try {
            
        } catch(err){
            logger.error(err);
        }
    }
    private setMiddleware() : void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:false }));
        this.app.use(morganMiddleware);
    }
    private setRouter(): void{
        this.app.use(router);
        this.app.use(UserRouter);
        this.app.use(CorsOptions({
            origin: true,
            credentials: true
        }));
    }
}