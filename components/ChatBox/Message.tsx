import {
  Button,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {},
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#425cd3",
  },
  card: {
    borderRadius: "15px !important",
    boxShadow: "5px 5px 16px -13.5px"
  }
});

const Message = (props: any) => {
  const classes = useStyles();
  return (
    <div className={props.className}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography className={classes.title} component="b">
            {props.userName}
          </Typography>

          <Typography component="p">{props.text}</Typography>
          <Typography variant="body2" component="cite">
            {props.date}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
