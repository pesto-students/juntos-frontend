import styled, { css } from "styled-components";
import { colors } from "../common/colors";

interface ButtonProps {
  ghost?: boolean;
}

export default styled.button<ButtonProps>`
  border-radius: 20px;
  border: 1px solid ${colors.primaryOne};
  background-color: ${colors.primaryOne};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 12px 46px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    background-color: ${colors.primaryTwo};
  }
  &:focus {
    outline: none;
  }
  ${({ ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      border-color: ${colors.white};
    `}
`;
