import { Request, Response } from "express";
import { db } from "../index";
import { Portada } from "../models/portada_model";
import { Respuesta } from "../models/respuesta";

export async function createPortada(req: Request, res: Response) {
    try {
        const newPortada = Portada(req.body);
        //newFoto.fecha =  new Date().toISOString();
        const portadaAdded = await db.collection("portada").add(newPortada);
        return res.status(201).json(Respuesta(`Portada agregada para la novela ${newPortada.idNovela}`, `La portada fue agregada correctamente con el id ${portadaAdded.id}`, newPortada, 201));
    }
    catch (err) {
        return handleError(res, err);
    }
}

export async function listPortadas(req: Request, res: Response) {
    try {
        let id = req.params.id;
        let snapshot = await db.collection("portadas").orderBy('idNovela').where("idNovela", "==", id).get();
        return res.status(200).json(snapshot.docs.map(doc => Portada(doc.data(), doc.id)));
    } catch (err) {
        return handleError(res, err);
    }
};

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}