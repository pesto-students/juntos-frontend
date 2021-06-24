import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Input from "src/components/Input";
import Button from "src/components/Button";
import { SignInContainer } from "./Auth.styles";
import { useAuth } from "src/context/GlobalContext";
import { LinkText } from "src/components/Link";
import { emailRegex, passwordRegex, validateRegex } from "src/common/utils";
import { toast } from "react-toastify";

const Login: React.FunctionComponent<RouteComponentProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgetPassword, setForgetPassword] = useState<boolean>(false);
  const { actions } = useAuth();

  /**
   * validate all input fields
   */
  const validateAllFields = () => {
    let message = "";
    if (!validateRegex(email, emailRegex)) {
      message = "Please enter valid email";
    } else if (!validateRegex(password, passwordRegex)) {
      message = "Password should be atleast 6 characters long";
    }
    message && toast.error(message);

    return message;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (forgetPassword) {
      if (!validateRegex(email, emailRegex)) {
        toast.error("Please enter valid email");
      } else {
        actions?.resetPassword(email);
      }
    } else {
      if (validateAllFields()) {
        return;
      }
      actions?.signIn({ email, password });
    }
  };

  const handleForgetPassword = () => {
    setForgetPassword((value) => !value);
  };

  return (
    <SignInContainer className="sign-in-container">
      <form action="#">
        <h1>{forgetPassword ? "Forget Password" : "Sign in"}</h1>
        <span className="small-text">
          {forgetPassword
            ? "Enter your email and receive reset link"
            : "Use your registered email for signing in"}
        </span>
        <Input
          value={email}
          data-testid="emailInput"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!forgetPassword && (
          <Input
            value={password}
            data-testid="passwordInput"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <LinkText onClick={handleForgetPassword}>
          {forgetPassword ? "Go to sign in" : "Forgot your password?"}
        </LinkText>

        <Button data-testid="signInBtn" type="submit" onClick={handleSubmit}>
          {forgetPassword ? "Reset your password" : "sign in"}
        </Button>
      </form>
    </SignInContainer>
  );
};

export default withRouter(Login);
