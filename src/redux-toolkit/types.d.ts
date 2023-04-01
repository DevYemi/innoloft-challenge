export type CatBusTRLType = { id: number, name: string }

export interface ProductDataType {
    "id": number,
    "name": string,
    "description": string,
    "picture": string
    "type": {
        "id": number,
        "name": string
    },
    "categories": CatBusTRLType[],
    "implementationEffortText": null,
    "investmentEffort": string,
    "trl": CatBusTRLType,
    "video": string,
    "user": {
        "id": number,
        "email": string,
        "firstName": string,
        "lastName": string,
        "sex": number,
        "profilePicture": string,
        "position": string
    },
    "company": {
        "name": string,
        "logo": string,
        "address": {
            "country": {
                "name": string
            },
            "city": {
                "name": string
            },
            "street": string,
            "house": string,
            "zipCode": string,
            "longitude": string,
            "latitude": string
        }
    },
    "businessModels": CatBusTRLType[]
}


export interface TrlListType {
    description: null | string,
    id: string,
    name: string
}

export interface AppConfigurationType {
    hasUserSection: boolean,
    id: string,
    mainColor: string,
    logo: string
}