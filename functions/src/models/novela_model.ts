//========== MODELO NOVELA ==========//

export interface Novelas {
    idNovela?: string,
    autor?: string,
    titulo?: string,
    portada?: string,
    descripcion?: string,
    fechaCreacion?: Date,
    favorito?: boolean,
}

export function Novelas(data: any, id?: string) {
    const { autor, titulo, portada, descripcion, fechaCreacion,  favorito} = data;

    let object: Novelas = {
        idNovela: id,
        autor: autor,
        titulo: titulo,
        portada: portada,
        descripcion: descripcion,
        fechaCreacion: fechaCreacion,
        favorito: favorito,
    };
    return object;
}
