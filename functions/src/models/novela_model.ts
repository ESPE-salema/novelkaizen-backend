//========== MODELO NOVELA ==========//

export interface Novela {
    idNovela?: string,
    autor?: string,
    titulo?: string,
    portada?: string,
    descripcion?: string,
    fechaCreacion?: string,
    favorito?: boolean,
}

export function Novela(data: any, id?: string) {
    const { autor, titulo, portada, descripcion, fechaCreacion, favorito } = data;

    let object: Novela = {
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
