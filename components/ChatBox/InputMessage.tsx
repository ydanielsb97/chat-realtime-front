import {
  Button,
  createStyles,
  FormControl,
  Icon,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import React from "react";

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

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
    }

    
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
