import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import Button from "src/components/Button";
import Login from "src/Auth/Login";
import SignUp from "src/Auth/SignUp";
import {
  AuthContainer,
  AuthenticationWrapper,
  OverlayContainer,
  Overlay,
  OverlayLeft,
  OverlayRight,
} from "src/Auth/Auth.styles";

const Authentication: React.FunctionComponent<RouteComponentProps<any>> =
  () => {
    const [signUpPanelActive, setActivePanel] = useState<boolean>(false);

    const handlePanelSwitch = () => {
      setActivePanel((signUpPanelActive) => !signUpPanelActive);
    };

    return (
      <AuthenticationWrapper>
        <AuthContainer signUpPanelActive={signUpPanelActive}>
          <SignUp />
          <Login />
          <OverlayContainer className="overlay-container">
            <Overlay className="overlay">
              <OverlayLeft className="overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your info</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign In
                </Button>
              </OverlayLeft>
              <OverlayRight className="overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign Up
                </Button>
              </OverlayRight>
            </Overlay>
          </OverlayContainer>
        </AuthContainer>
      </AuthenticationWrapper>
    );
  };

export default Authentication;
