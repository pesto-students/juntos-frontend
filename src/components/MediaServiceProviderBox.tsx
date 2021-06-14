import styled from "styled-components";

import { dropShadow } from "src/common/constants/dropShadow";
import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

const MediaServiceProviderBox = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.primaryTwo};
    width: ${props => (props.width || 190) + `px`};
    height: ${props => (props.height || 115) + `px`};
    margin: ${cssScale.c2};
    box-shadow: ${dropShadow.primary};
  `;

export default MediaServiceProviderBox;   