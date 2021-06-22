import { colors, cssScale } from "src/common/constants";
import styled from "styled-components";

interface InputProps {
  paddingRight?: string;
  borderRadius?: string;
  margin?: string;
  outline?: string;
}

export default styled.input<InputProps>`
  background-color: ${colors.grey2};
  border: none;
  padding: ${cssScale.c3} ${cssScale.c4};
  margin: ${({ margin }) => margin ?? `${cssScale.c2} ${cssScale.c0}`};
  width: ${({ width }) => width ?? '100%'};
  border-radius: ${({ borderRadius }) => borderRadius ?? cssScale.c1};
  padding-right: ${({ paddingRight }) => paddingRight};
  outline: ${({ outline }) => outline};
`;
