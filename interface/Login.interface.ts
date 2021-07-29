
export interface LoginI {
    userName: string
    password: string
}

export interface AuthI {
    userName: string,
    uuid: string
    token?: string
}

export interface TokenDecoded {
    exp: number
    iat: number
    userName: string
    uuid: string
}