/* Modelo representa el concepto de Portada */
/*============ Portada ============*/
export interface Portada {
    idPortada?: string,
    url: string,
    idNovela: string
}

export function Portada(data: any, id?: string) {
    const { url, idNovela } = data;

    let object: Portada = {
        idPortada: id,
        url: url,
        idNovela: idNovela
    };
    return object;
}