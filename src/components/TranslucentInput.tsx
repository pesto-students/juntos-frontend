import styled from "styled-components";
import { cssScale, colors, dropShadow } from "src/common/constants";

interface ITranslucentInput{
  width?: string,
  height?: string
}

const defaultWidth = 500;
const defaultHeight = 45;

const TranslucentInput = styled.input<ITranslucentInput>`
    width: ${props => (props.width || defaultWidth) + `px`};
    height: ${props => (props.height || defaultHeight) + `px`};
    margin: ${cssScale.c2};
    border-width: ${cssScale.c0};
    outline: ${cssScale.c0};
    padding-left: ${cssScale.c3};
    padding-right: ${cssScale.c3};
    box-shadow: ${dropShadow.primary};
    background: ${colors.codGrey20};
    caret-color: ${colors.white60};
    text-align: center;
    color: ${colors.white50}; 
    ::placeholder { 
      color: ${colors.white30};
      font-weight: bold;
    }
  `;

export default TranslucentInput;