import React, { useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";

import Button from "src/components/Button";
import Login from "src/Auth/Login";
import SignUp from "src/Auth/SignUp";
import {
  AuthContainer,
  AuthenticationWrapper,
  AuthOverlayContainer,
  AuthOverlay,
  AuthOverlayLeft,
  AuthOverlayRight,
} from "src/Auth/Auth.styles";

const Authentication: React.FunctionComponent<RouteComponentProps<{}>> =
  () => {
    const [signUpPanelActive, setActivePanel] = useState<boolean>(false);

    const handlePanelSwitch = useCallback(() => {
      setActivePanel((signUpPanelActive) => !signUpPanelActive);
    }, [setActivePanel]);

    return (
      <AuthenticationWrapper>
        <AuthContainer signUpPanelActive={signUpPanelActive}>
          <SignUp />
          <Login />
          <AuthOverlayContainer className="overlay-container">
            <AuthOverlay className="overlay">
              <AuthOverlayLeft className="overlay-left">
                <h1>Welcome Back!</h1>
                <p className="text">To keep connected with us please login with your info</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign In
                </Button>
              </AuthOverlayLeft>
              <AuthOverlayRight className="overlay-right">
                <h1>Hello, Friend!</h1>
                <p className="text">Enter your personal details and start journey with us</p>
                <Button ghost onClick={handlePanelSwitch}>
                  Sign Up
                </Button>
              </AuthOverlayRight>
            </AuthOverlay>
          </AuthOverlayContainer>
        </AuthContainer>
      </AuthenticationWrapper>
    );
  };

export default Authentication;
