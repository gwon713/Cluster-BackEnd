import path from "path";
import dotenv from "dotenv";

const config = dotenv.config({
    path : path.join(__dirname, `../../env/.env.${process.env.NODE_ENV}`)
})

export const env = {
    database : {
        host: process.env.PG_HOST,
        user: process.env.PG_USER,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: Number(process.env.PG_PORT)
    }
}
