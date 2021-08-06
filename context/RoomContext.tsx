import { createContext, useState } from "react";


export const RoomContext = createContext(undefined);


const RoomContextProvider = (props: any) => {
    
    const [roomSelected, setRoomSelected] = useState("Select a Room");

    return (
        <RoomContext.Provider value={{roomSelected, setRoomSelected}}>

            {props.children}
            
        </RoomContext.Provider>
    )
}


export default RoomContextProvider;