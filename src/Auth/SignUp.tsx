import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { SignUpContainer } from "./Auth.styles";
import { useAuth } from "src/context/GlobalContext";

const SignUp: React.FunctionComponent<RouteComponentProps<{}>> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { actions } = useAuth();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    actions?.signUp({ email, password });
  };

  return (
    <SignUpContainer className="sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <span className="small-text">use your email for registration</span>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <Input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
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
