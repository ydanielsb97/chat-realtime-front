import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Message from "./Message";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "flex-end",
      padding: "5px 10px",
      overflowY: "scroll",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr",
      alignItems: "flex-end",
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

const BoxMessages = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
         className={classes.messageReceived}
          userName="Yeison"
          text="This is a test message 2"
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
  
    </div>
  );
};

export default BoxMessages;
