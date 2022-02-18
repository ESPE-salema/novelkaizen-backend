import { Application } from "express";
import { registro } from './controllers/autenticacion_controller';
import { createPortada, listPortadas } from './controllers/portada_controller';
import { listNovelas, createNovela, consultarNovela } from "./controllers/novela_controller";


export function routes(app: Application){
    app.get('/api/novelas', listNovelas);
    app.post('/api/novela', createNovela);
    app.get('/api/novela/:id', consultarNovela);
    app.post('/api/portada', createPortada);
    app.get('/api/portadas/:id', listPortadas);
    app.post('/api/registro', registro);
}