import styled from "styled-components";

import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

const CarouselContainer = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${props => (props.width || 500) + `px`};
    height: ${props => (props.height || 130) + `px`};
    margin: ${cssScale.c2};
  `;

export default CarouselContainer;   