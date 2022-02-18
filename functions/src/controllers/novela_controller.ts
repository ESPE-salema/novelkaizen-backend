import { Request, Response } from "express";
import { db } from "../index";
import { Novela } from "../models/novela_model";
import { Respuesta } from "../models/respuesta";

export async function createNovela(req: Request, res: Response) {           
    try{                    
        const newNovela = Novela(req.body);
        //newNovela.fechaCreacion =  new Date().toISOString();
        const novelaAdded = await db.collection("novelas").add(newNovela);                            
        return res.status(201).json(Respuesta('Novela agregado', `La novela fue agregada correctamente con el id ${novelaAdded.id}`, newNovela, 201));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function consultarNovela(req: Request, res: Response) {           
    try{
        const doc = await db.collection("novelas").doc(req.params.id).get();
        if(!doc) {
            return res.status(404).json(Respuesta('Novela no encontrado', `Novela con el id ${req.params.id} no encontrada`, {req}, 404));               
        }        
        return res.status(200).json(Novela(doc.data(), doc.id));
    }
    catch(err){
        return handleError(res, err);
    }
}

export async function listNovelas(req: Request, res: Response) {
    try {
        let snapshot = await db.collection("novelas").get();
        return res.status(200).json(snapshot.docs.map(doc => Novela(doc.data(), doc.id)));
    } catch (err) {
        return handleError(res, err);
    }
};

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}