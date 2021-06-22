import styled from "styled-components";

import { 
  colors, 
  dropShadow, 
  highlightContainerWidth,
  highlightContainerHeight, 
  cssScale
} from "src/common/constants";

interface IHighlightContainer {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string;
  padding?: string;
}

const HighlightContainer = styled.div<IHighlightContainer>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: ${highlightContainerWidth};
    height: ${highlightContainerHeight};
    background-image: linear-gradient(to right, ${colors.blue1}, ${colors.blue2});
    box-shadow: ${dropShadow.primary};
    border-radius: ${cssScale.c2};
    padding: ${({padding}) => padding || 'unset'};
  `;

export default HighlightContainer;  