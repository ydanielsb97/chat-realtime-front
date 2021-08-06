import io from 'socket.io-client';
import { MessageI } from '../interface/Message.interface';

const socket = io('http://localhost:4000/');

export const emitRoomSelected = (oldRoom: string, roomName: string) => {

    socket.emit("room-selected",oldRoom, roomName);
}

export const emitNewMessage = (message: MessageI, roomSelected: string) => {
    socket.emit("send-new-message", message, roomSelected);
}

export const getNewMessage = (setMessages: Function) => {

    socket.on("new-brodcast", (data: MessageI) => {
        setMessages(data);
    })
}
export const roomChanged = (resetMessages: Function) => {

    socket.on("reset-messages", () =>  {
    })
}

socket.on("user-join", (data: string) => {
    console.log(data)
})

socket.on("new-brodcast", (data: string) => {
    console.log("MESSAGE RECEIVED", data)
})

