export interface Users {
    id : number
    name? : String
    email : String
    password : String
    role : String
    family : Users[]
    house : House[]
    cart : Products[]
    isConnected: boolean
}

export interface Products {
    id : number
    name : String
    description : String
    perissable: boolean
    quantity : number
    message : String
    dateDePeremption : Date
}

export interface House {
    id : number
    name : String
}