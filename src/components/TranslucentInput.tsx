import styled from "styled-components";
import { dropShadow } from "src/common/constants/dropShadow";
import { cssScale } from "src/common/constants/cssScale";
import { colors } from "src/common/constants/colors";
import { CustomStyleProps } from "src/common/interface";

const TranslucentInput = styled.input<CustomStyleProps>`
    width: ${props => (props.width || 500) + `px`};
    height: ${props => (props.height || 45) + `px`};
    margin: ${cssScale.c2};
    border-width: 0px;
    outline: 0px;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: ${dropShadow.primary};
    background: ${colors.inputBackground};
    caret-color: ${colors.inputCaretColor};
    text-align: center;
    color: ${colors.inputText}; 
    ::placeholder { 
      color: ${colors.inputPlaceholder};
      font-weight: bold;
    }
  `;

export default TranslucentInput;