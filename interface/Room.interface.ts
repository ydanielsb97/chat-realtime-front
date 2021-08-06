import { MessageI } from "./Message.interface";

export interface RoomI {
    name: string
    messages: MessageI[]
}