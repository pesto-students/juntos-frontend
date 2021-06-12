import styled from "styled-components";

import { dropShadow } from "src/common/constants/dropShadow";
import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

const CarouselContainer = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    width: ${props => (props.width || 500) + `px`};
    height: ${props => (props.height || 130) + `px`};
    border: 1px solid red;
    margin: ${cssScale.c2};
    box-shadow: ${dropShadow.primary};
  `;

export default CarouselContainer;   