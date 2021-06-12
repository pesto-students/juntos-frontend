import styled from "styled-components";

import { colors } from "src/common/constants/colors";
import { dropShadow } from "src/common/constants/dropShadow";
import { CustomStyleProps } from "src/common/interface";

const HighlightContainer = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: 900px;
    height: 525px;
    margin-left: 10%;
    background-image: linear-gradient(to right, ${colors.primaryOne}, ${colors.primaryTwo});
    box-shadow: ${dropShadow.primary};
  `;

export default HighlightContainer;  