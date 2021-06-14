import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { AuthForm } from "./Auth.interface";
import Input from "src/components/Input";
import * as routes from "src/common/constants/pageRoutes";
import Button from "src/components/Button";
import { SignUpContainer } from "./Auth.styles";

const SignUp: React.FunctionComponent<RouteComponentProps<any>> = ({
  history,
}) => {
  const [formData, setFormData] = useState<AuthForm>({
    email: "",
    password: "",
  });

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push(routes.HOME);
    // const { name, email, password } = formData;
    // register({ name, email, password });
  };

  return (
    <SignUpContainer className="sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <span>use your email for registration</span>
        <Input
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
        />
        <Input
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
