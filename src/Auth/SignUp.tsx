import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { SignUpContainer } from "./Auth.styles";
import { useAuth } from "src/context/GlobalContext";
import {
  validateRegex,
  nameRegex,
  emailRegex,
  passwordRegex,
} from "src/common/utils";
import { toast } from "react-toastify";

const SignUp: React.FunctionComponent<RouteComponentProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { actions } = useAuth();

  /**
   * validate all input fields
   */
  const validateAllFields = () => {
    let message = "";
    if (!validateRegex(name, nameRegex)) {
      message = "Name should be atleast 3 characters long";
    } else if (!validateRegex(email, emailRegex)) {
      message = "Please enter valid email";
    } else if (!validateRegex(password, passwordRegex)) {
      message = "Password should be atleast 6 characters long";
    }
    message && toast.error(message);

    return message;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (validateAllFields()) {
      return;
    }
    actions?.signUp({ name, email, password });
  };

  return (
    <SignUpContainer className="sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <span className="small-text">use your email for registration</span>
        <Input
          value={name}
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default withRouter(SignUp);
