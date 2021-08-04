import {
  Button,
  createStyles,
  FormControl,
  Icon,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { emitNewMessage } from "../../socket";
import RoomContext from "../../context/RoomContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      
      height: "100%",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "80% 20%",
        width: "100%"
    },
    form: {
        width: "100%"
    },
  })
);
const InputMessage = () => {

  const [message, setMessage] = useState("")


  const roomSelected = useContext(RoomContext)

  const onSubmitHandler = (e: any) => {
      e.preventDefault()
    
      console.log(roomSelected)
      emitNewMessage(message, roomSelected);

      e.target.reset();

  }

  const changeHandler = (e: any) => setMessage(e.target.value)

    
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
        
      <FormControl fullWidth variant="outlined">
      <div className={classes.container}>
        <TextField
          id="filled-textarea"
          label="Write your text"
          placeholder="message"
          multiline
          variant="outlined"
          name="message"
          value={message}
          onChange={changeHandler}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          Send
        </Button>
        </div>
      </FormControl>
      
    </form>
  );
};

export default InputMessage;
