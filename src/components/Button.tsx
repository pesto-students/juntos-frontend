import { cssScale } from "src/common/constants/cssScale";
import styled, { css } from "styled-components";
import { colors } from "src/common/constants/colors";
interface ButtonProps {
  ghost?: boolean;
  small?: boolean;
  fontSize?: string;
}

export default styled.button<ButtonProps>`
  border-radius: ${cssScale.c5};
  border: 1px solid ${colors.blue1};
  background-color: ${colors.blue1};
  color: ${colors.white};
  font-size: ${({ fontSize }) => fontSize ?? cssScale.c4};
  font-weight: bold;
  padding: ${cssScale.c3} ${cssScale.c9};
  transition: transform 80ms ease-in;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    background-color: ${colors.blue2};
  }
  &:focus {
    outline: none;
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${({ ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      border-color: ${colors.white};
      box-shadow: none;
    `}
  ${({ small }) =>
    small &&
    css`
    padding: ${cssScale.c1} ${cssScale.c7};
    `}
`;
