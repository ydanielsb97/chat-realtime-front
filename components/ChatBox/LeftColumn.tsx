import {
  createStyles,
  Divider,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import Message from "./Message";
import React from "react";
import InputMessage from "./InputMessage";
import BoxMessages from "./BoxMessages";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      backgroundColor: theme.palette.background.paper,
      height: "69.9vh",
    },
    title: {
      flexGrow: 1,
      padding: "10px 0 10px 14px",
      backgroundColor: "#556cd6",
      color: "white",
      boxShadow: "0px 1px 6px 1px #ccc",
    },
    inputMessage: {
      margin: "0",
      alignSelf: "flex-end",
    },
  })
);

const LeftColumn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h6" className={classes.title}>
          Messages
        </Typography>
        <Divider />
      </div>

      <BoxMessages />

      <div className={classes.inputMessage}>
        <InputMessage />
      </div>
    </div>
  );
};

export default LeftColumn;
