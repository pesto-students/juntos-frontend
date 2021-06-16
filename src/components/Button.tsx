import styled, { css } from "styled-components";
import { colors, cssScale } from "src/common/constants";

interface ButtonProps {
  ghost?: boolean;
}

export default styled.button<ButtonProps>`
  border-radius: ${cssScale.c5};
  border: 1px solid ${colors.blue1};
  background-color: ${colors.blue1};
  color: ${colors.white};
  font-size: ${cssScale.c4};
  font-weight: bold;
  padding: ${cssScale.c3} ${cssScale.c11};
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
  ${({ ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      border-color: ${colors.white};
    `}
`;
