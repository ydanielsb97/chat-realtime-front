import { TOKEN } from "../config/env"

export const setToken = (token: string) => localStorage.setItem(TOKEN, token)

export const getToken = () => localStorage.getItem(TOKEN)

export const deleteToken = () => localStorage.removeItem(TOKEN);