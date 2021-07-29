import Router from "next/router";
import { useContext } from "react";
import { PUBLIC_PATHS } from "../config/env";
import AuthContext from "../context/AuthContext";

const AuthMiddleware = (props: any) => {
  const { auth } = useContext(AuthContext);
    
  if (!auth && !PUBLIC_PATHS.includes(Router.pathname)) {
    Router.push("/login");
    return null;
  } else if(auth && PUBLIC_PATHS.includes(Router.pathname)){
    Router.push("/");
    return null;
  }

  return <>

  {
  props.children
  }
  
  </>;
};

export default AuthMiddleware;
