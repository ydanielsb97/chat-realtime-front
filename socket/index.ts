
import io from 'socket.io-client';

const socket = io('http://localhost:4000/');

export const emitRoomSelected = (oldRoom: string, roomName: string) => {

    socket.emit("room-selected",oldRoom, roomName);
}

export const emitNewMessage = (message: string, roomSelected: string) => {
    socket.emit("send-new-message", message, roomSelected);
}

socket.on("user-join", (data: string) => {
    console.log(data)
})

socket.on("new-brodcast", (data: string) => {
    console.log(data)
})