import express, {Request, Response} from "express";
import { connection } from "./config/database";
import logger from './config/logger';

export class App{
    public app;

    constructor(){
        this.app = express();
        this.setExpress();
        this.setMiddleware();
    }

    private setExpress() : void {
        try {
            this.app.get('/hello', (req:Request, res:Response) => {
                res.status(200).send('hello ts express!');
            })
        } catch(err){
            logger.info(err);
        }
    }
    private setDB() : void {
        connection.on('error', (req, res) => {
            
        });
    }
    private setMiddleware() : void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:false }));
    }
}