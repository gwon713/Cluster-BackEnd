import express from "express";
import { connection } from "./config/database";
import logger from './config/logger';
import morganMiddleware from './config/morgan';
import router from './config/route';
import UserRouter from './controller/userRoute';
import CorsOptions from 'cors';
import session from 'express-session';
// import passport from "passport";
// import Passport from "./config/passport";
export class App{
    public app: express.Application;
    // public passportConfig: Passport = new Passport();

    constructor(){
        this.setDB();
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
    private setDB() : void {
        const handleDisconnect= ()=>{
            connection.connect(async(err)=>{            
                if(err) {                            
                    logger.error('error when connecting to db:', err);
                    setTimeout(handleDisconnect, 2000); 
                }else{
                    // await connection.query('set search_path = public;');
                    const search_path = await connection.query("show search_path")
                    console.log(search_path.rows);
                    logger.info("PostgreSQL Connect");
                }                              
            });                                          
            connection.on('error', (err: any)=>{
                logger.error('db error', err);
                if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
                    return handleDisconnect();                      
                } else {                                    
                    throw err;                              
                }
            });
        }
        handleDisconnect();
    }
    private setMiddleware() : void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:false }));
        this.app.use(morganMiddleware);
    }
    private setRouter(): void{
        this.app.use(router);
        this.app.use(UserRouter);
        // this.app.use(CorsOptions({
        //     origin: true,
        //     credentials: true
        // }));
        this.app.use(CorsOptions());
    }
}