import styled from "styled-components";

import { cssScale } from "src/common/constants/cssScale";

interface ICarouselContainer {
  width?: string,
  height?: string
}

const CarouselContainer = styled.div<ICarouselContainer>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${props => (props.width || 500) + `px`};
    height: ${props => (props.height || 130) + `px`};
    margin: ${cssScale.c2};
  `;

export default CarouselContainer;   