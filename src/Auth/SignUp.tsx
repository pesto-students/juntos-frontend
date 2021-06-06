import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { AuthForm } from "src/Auth/Auth.interface";
import Input from "src/components/Input";
import * as routes from "src/common/pageRoutes";
import Button from "src/components/Button";

const SignUp: React.FunctionComponent<RouteComponentProps<any>> = ({
  history,
}) => {
  const [formData, setFormData] = useState<AuthForm>({
    name: "",
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
  };

  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <Input
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          name="name"
        />
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
    </div>
  );
};

export default withRouter(SignUp);
