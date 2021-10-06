import express, { Request, Response, NextFunction } from "express";
import { connection } from "./config/database";
import logger from './config/logger';
import morganMiddleware from './config/morgan';
import router from './config/route';
import UserRouter from './controller/userRoute';
import cors from 'cors';
import session from 'express-session';
// import passport from "passport";
// import Passport from "./config/passport";

export class App{
    public app: express.Application;
    // public passportConfig: Passport = new Passport();
    private options: cors.CorsOptions = {
        // origin: true
    };
    constructor(){
        this.setDB();
        this.app = express();
        this.setRouter();
        this.setMiddleware();
        this.setExpress();
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
        this.app.use(cors);
        this.app.use((req: Request, res: Response, next: NextFunction)=>{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, X-Requested-With");
            res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
            next();
        });
    }
}