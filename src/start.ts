import { App } from './app';

try {
    const app = new App().app;
    const port : Number = 3000;

    app.listen(port, () => {
        console.log(`Server is running on port : ${port}`);
    });
} catch(err) {
    console.log(err);
}