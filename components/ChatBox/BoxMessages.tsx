import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useState, useContext, createRef } from "react";
import Message from "./Message";
import { MessageI } from "../../interface/Message.interface";
import { getNewMessage, roomChanged } from "../../socket";
import { RoomContext } from "../../context/RoomContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "column-reverse",
      padding: "5px 10px",
      overflowY: "scroll",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr",
      borderLeft: "1px solid #ccc"
    },
    messageReceived: {
      width: "45%",
      margin: "10px 0",
      float: "left",
      borderRadius: "15px"
    },
    messageSended: {
      width: "45%",
      margin: "10px 0",
      float: "right",
      borderRadius: "15px"
    },
    messageContainer: {
      width: "100%"
    }



  })
);
const containerMessages = createRef();

const BoxMessages = () => {
  const classes = useStyles();

  const { roomSelected } = useContext(RoomContext)

  const [messages, setMessages] = useState<MessageI[]>([])
  

  useEffect(() => {
    setMessages([])
  }, [roomSelected])


  const pushMessages = (data: any) =>{

    setMessages((prev: MessageI[]) => [...prev, data])
    //@ts-ignore
    containerMessages.current.scrollTop = 10000000
  }

  const resetMessages = () => {
    console.log("RESET MESSAGES")
    setMessages([])
  }

  useEffect(() => {
    getNewMessage(pushMessages)
    roomChanged(resetMessages);
  }, [])


  return (
    <div className={classes.root} ref={containerMessages}>

      
  {
    messages.map((message: MessageI, i: number) =>(
      
      <div className={classes.messageContainer} key={i}>
      <Message
         className={classes.messageReceived}
          userName={message.author}
          text={message.text}
          date={message.date}
          
        />
        </div>
    ))
  }
{/* <div className={classes.messageContainer}>

        <Message
         className={classes.messageReceived}
          userName="Yeison"
          text="This is a test message 1"
          date="26/07/2021"
        />
        </div>

        
        <div className={classes.messageContainer}>
            <Message
         className={classes.messageReceived}
          userName="Yeison"
          text="This is a test message 1"
          date="26/07/2021"
        />
        </div>

        <div className={classes.messageContainer}>
          <Message
         className={classes.messageSended}
          userName="Yeison"
          text="This is a test message 1"
          date="26/07/2021"
        />
        </div>

        <div className={classes.messageContainer}>
          <Message
         className={classes.messageReceived}
          userName="Yeison"
          text="This is a test message 1"
          date="26/07/2021"
        />
        </div>
   */}
    </div>
  );
};

export default BoxMessages;
