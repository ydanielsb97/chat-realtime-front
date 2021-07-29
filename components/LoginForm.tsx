import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginI } from "../interface/Login.interface";
import { useContext, useState } from "react";
import { useLoginMutation } from "../src/generated/graphql";
import { CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AuthContext from "../context/AuthContext";

const LoginForm = (props: any) => {

  const context = useContext(AuthContext);

  const initialState: LoginI = {
    userName: "",
    password: "",
  };

  const [alert, setAlert] = useState(false)
  const [loginData, setLoginData] = useState(initialState);

  const [submitLogin, { error }] = useLoginMutation();

  const [btnState, setBtnState] = useState({
    disabled: false,
    display: "none",
  });

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    

    setBtnState((prev: any) => ({
      ...prev,
      disabled: true,
      display: "in-line",
    }));

    const res = await submitLogin({
      variables: {
        ...loginData,
      },
    });

    if (!res.data) {
      setBtnState((prev: any) => ({ ...prev, disabled: false, display: "none" }));
      setAlert(true);
    }else{

      context.login(res.data.login.data.token);
      
      setBtnState((prev: any) => ({ ...prev, disabled: false, display: "none" }));
    }

    // console.log(context.auth)

  };

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    setLoginData((prev: LoginI) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container spacing={3} direction="column" justifyContent="center">

      {alert &&  <Grid item >
          <Alert severity="error">Invalid username or passwod</Alert>
        </Grid>}
       
        <Grid item>
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            name="userName"
            fullWidth={true}
            onChange={onChangeHandler}
            value={loginData.userName}
            required
          />
        </Grid>

        <Grid item>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            fullWidth={true}
            onChange={onChangeHandler}
            value={loginData.password}
            required
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            disabled={btnState.disabled}
            fullWidth={true}
            variant="contained"
            size="large"
            color="primary"
          >
            <CircularProgress
              style={{ display: btnState.display }}
              size="20px"
              color="primary"
            />
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
