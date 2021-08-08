import express, {Request, Response} from "express";

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
            console.log(err);
        }
    }
    private setMiddleware() : void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended:false }));
    }
}