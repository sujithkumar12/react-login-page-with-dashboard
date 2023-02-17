import React from "react";
import classes from "./Style.module.css";

function Login(props) {
  return <div className={classes.loginBody}>{props.children}</div>;
}

export default Login;
