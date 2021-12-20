import { Request, Response } from "express";
import { db } from "../index";
import { Novelas } from "../models/novela_model";

export async function list(req: Request, res: Response) {
    try {
        let snapshot = await db.collection("novelas").get();
        return res.status(200).json(snapshot.docs.map(doc => Novelas(doc.data(), doc.id)));
    } catch (err) {
        return handleError(res, err);
    }
};

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}