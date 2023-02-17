import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Style.module.css";

function LoginForm() {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setIsEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setIsPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user_email", isEmail);
    navigate("/");
  };

  return (
    <div>
      <h2 className={classes.heading}>
        Login here<span className={classes.diff}>!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formBody}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={classes.inputBody}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className={classes.inputBody}
            onChange={handlePasswordChange}
          />
          <input type="submit" value="Submit" className={classes.submitBtn} />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
