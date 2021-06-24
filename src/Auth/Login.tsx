import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { SignInContainer } from "./Auth.styles";
import { useAuth } from "src/context/GlobalContext";

const Login: React.FunctionComponent<RouteComponentProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { actions } = useAuth();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    actions?.signIn({ email, password });
  };

  return (
    <SignInContainer className="sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <span className="small-text">or use your account</span>
        <Input
          value={email}
          data-testid="emailInput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          data-testid="passwordInput"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* TODO forget Password component to be added */}
        {/* <Link to={routes.AUTH}>Forgot your password?</Link> */}
        <Button data-testid="signInBtn" type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
    </SignInContainer>
  );
};

export default withRouter(Login);
