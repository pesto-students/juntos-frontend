import React, { useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import { AuthForm } from "./Auth.interface";
import Input from "../components/Input";
import * as routes from "../common/pageRoutes";
import Button from "../components/Button";

const Login: React.FunctionComponent<RouteComponentProps<any>> = ({
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
    // login(formData.email, formData.password);
  };

  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <span>or use your account</span>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
        />
        <Link to={routes.FORGET_PASSWORD}>Forgot your password?</Link>
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default withRouter(Login);
