import styled, { css } from "styled-components";

import { cssScale, defaultFontSize, boxShadow } from "src/common/constants/cssScale";
import { colors } from "src/common/constants/colors";

interface AuthContainerProp {
  signUpPanelActive: boolean;
}

const { c0, c3, c4, c5, c7, c10, c11 } = cssScale;

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.background};
  height: 100vh;
  align-items: center;
  margin-top: -${c5};

  p {
    font-size: ${defaultFontSize};
    line-height: ${c5};
    letter-spacing: 0.5px;
    margin: ${c5} ${c0} ${c7};
  }

  span {
    font-size: ${c3};
  }

  a {
    color: ${colors.primaryTwo};
    text-decoration: none;
    margin: ${c4} ${c0};
  }

  @media (max-width: 768px) {
    margin-top: -${c5};
    padding: ${c4};
  }
`;

export const AuthContainer = styled.div<AuthContainerProp>`
  background-color: #fff;
  border-radius: ${c3};
  box-shadow: ${boxShadow};
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  ${({ signUpPanelActive }) =>
    signUpPanelActive &&
    css`
      /* Animation */
      .sign-in-container {
        transform: translateX(100%);
      }

      /* move overlay to left */
      .overlay-container {
        transform: translateX(-100%);
      }

      /* hide signin and show signup */
      .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 3;
      }

      .overlay {
        transform: translateX(50%);
      }

      .overlay-left {
        transform: translateX(0);
      }
      .overlay-right {
        transform: translateX(30%);
      }
    `}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90%;
    min-height: 568px;
    max-width: 568px;
    ${({ signUpPanelActive }) =>
      signUpPanelActive &&
      css`
        /* Animation */
        .sign-in-container {
          transform: translateY(100%);
        }

        /* move overlay to up */
        .overlay-container {
          transform: translateY(-100%);
        }

        /* hide signin and show signup */
        .sign-up-container {
          transform: translateY(100%);
        }

        /* show overlay up */
        .overlay {
          transform: translateY(50%);
        }

        .overlay-left {
          transform: translateY(0);
        }
        .overlay-right {
          transform: translateY(30%);
        }
      `}
  }
`;

const AuthFormContainer = styled.div`
  position: absolute;
  top: ${c0};
  height: 100%;
  transition: all 0.6s ease-in-out;

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${c0} ${c11};
    height: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const SignInContainer = styled(AuthFormContainer)`
  left: 0;
  width: 50%;
  z-index: 2;

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    height: 50%;
  }
`;

export const SignUpContainer = styled(AuthFormContainer)`
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;

  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    height: 50%;
  }
`;

export const Overlay = styled.div`
  background: #004a93;
  background: linear-gradient(to right, #004a93, #3677c7);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    left: 0;
    top: -100%;
    height: 200%;
    width: 100%;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: ${c0};
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  @media (max-width: 768px) {
    top: 50%;
    left: ${c0};
    width: 100%;
    height: 50%;
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  top: ${c0};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${c0} ${c10};
  height: 100%;
  width: 50%;
  text-align: center;
  transition: transform 0.6s ease-in-out;

  @media (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-30%);

  @media (max-width: 768px) {
    transform: translateY(-30%);
  }
`;

export const OverlayRight = styled(OverlayPanel)`
  right: ${c0};
  transform: translateX(0);

  @media (max-width: 768px) {
    top: unset;
    bottom: ${c0};
  }
`;
