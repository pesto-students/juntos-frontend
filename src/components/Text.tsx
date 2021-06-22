import { colors, cssScale } from "src/common/constants";
import styled from "styled-components";

interface IText {
  margin?: string;
  width?: string;
  textAlign?: string;
}

export const Text = styled.p<IText>`
  font-size: ${`18px`};
  letter-spacing: 0.5px;
  color: ${colors.white};
  font-weight: bold;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
`;

export const TitleText = styled.h1<IText>`
  font-size: ${cssScale.c12};
  letter-spacing: 0.5px;
  color: ${colors.white};
  font-weight: bold;
  margin: ${({ margin }) => margin};
`;
