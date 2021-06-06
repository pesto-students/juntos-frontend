import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import Button from "src/components/Button";
import Login from "src/Auth/Login";
import SignUp from "src/Auth/SignUp";
import { AuthenticationWrapper } from "src/Auth/Auth.styles";
import "src/Auth/Authentication.css";

const Authentication: React.FunctionComponent<RouteComponentProps<any>> =
  () => {
    const [panel, setActivePanel] = useState<string>("");

    const handlePanelSwitch = () => {
      setActivePanel((panel) => (panel ? "" : "signup-pannel-active"));
    };

    return (
      <AuthenticationWrapper>
        <div className={`container ${panel}`}>
          <SignUp />
          <Login />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your info</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign In
                </Button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AuthenticationWrapper>
    );
  };

export default Authentication;
