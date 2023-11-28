export interface Medicamento {
    "totalFilas": number,
    "pagina": number,
    "tamanioPagina": number,
    "resultados": [
        {
            "nregistro": string,
            "nombre": string,
            "labtitular": string,
            "cpresc": string,
            "estado": {
                "aut": number,
                "rev": number
            },
            "comerc": boolean,
            "receta": boolean,
            "generico": boolean,
            "conduc": boolean,
            "triangulo": boolean,
            "huerfano": boolean,
            "biosimilar": boolean,
            "nosustituible": {
                "id": number,
                "nombre": string
            },
            "psum": boolean,
            "notas": boolean,
            "materialesInf": boolean,
            "ema": boolean,
            "docs": [
                {
                    "tipo": number,
                    "url": string,
                    "secc": boolean,
                    "fecha": number
                },
                {
                    "tipo": number,
                    "url": string,
                    "urlHtml": string,
                    "secc": boolean,
                    "fecha": number
                }
            ],
            "viasAdministracion": [
                {
                    "id": number,
                    "nombre": string
                }
            ],
            "formaFarmaceutica": {
                "id": number,
                "nombre": string
            },
            "formaFarmaceuticaSimplificada": {
                "id": number,
                "nombre": string
            },
            "vtm": {
                "id": number,
                "nombre": string
            },
            "dosis": string
        }
    ]
}
    







/*

    */