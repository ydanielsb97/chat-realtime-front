import LoginForm from "../components/LoginForm";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import Icon from "@material-ui/icons"
import Head from 'next/head'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    item: {
        width: "27vw"
      },
  }),
);
const Login = () => {

  const classes = useStyles();
  return (
    <Grid container  
    direction="column"
    alignItems="center"
    justifyContent="center"
    className={classes.root}

    >
      <Grid item className={classes.item}>
        
    <h2>Sign In</h2>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
