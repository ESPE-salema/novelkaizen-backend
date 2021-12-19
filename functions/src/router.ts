import { Application } from "express";
import { list } from "./controllers/novela_controller";


export function routes(app: Application){
    app.get('/api/novelas', list);
}