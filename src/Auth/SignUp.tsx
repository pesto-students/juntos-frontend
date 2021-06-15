import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Input from "src/components/Input";
import * as routes from "src/common/constants/pageRoutes";
import Button from "src/components/Button";
import { SignUpContainer } from "./Auth.styles";
import { IParams } from "src/common/interface";

const SignUp: React.FunctionComponent<RouteComponentProps<IParams>> = ({
  history,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        setPassword(value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push(routes.HOME);
  };

  return (
    <SignUpContainer className="sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <span>use your email for registration</span>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
        />
        <Input
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          name="password"
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default withRouter(SignUp);
