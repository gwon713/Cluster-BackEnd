import { App } from './app';
import logger from './config/logger';

try {
    const app = new App().app;
    const port : number = 3000;

    const setProcess = ()=>{
        process.on('SIGINT', ()=>{
            logger.error('SIGINT ERROR');
            listeningServer.close(()=>{
                logger.info('##### SERVER IS CLOSE #####');
                process.exit(0);
            });
        });
        process.on('uncaughtException', (err)=>{ // 못잡은 error handler
            logger.error('uncaughtException : '+err.stack);
            listeningServer.close(()=>{
                logger.info("##### SERVER IS CLOSE #####");
                process.exit(0);
            })
        }); 
    }
    let listeningServer = app.listen(port, () => {
        logger.info(` NODE ENV = ${process.env.NODE_ENV} `)
        logger.info(`Server is running on port : ${port}`);
    });
    setProcess();
} catch(err) {
    logger.error(err);
}