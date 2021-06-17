import styled from "styled-components";

import { 
  colors, 
  dropShadow, 
  highlightContainerWidth,
  highlightContainerHeight 
} from "src/common/constants";

interface IHighlightContainer {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string
}

const highlightContainerHeightMarginLeft = '10%';

const HighlightContainer = styled.div<IHighlightContainer>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: ${highlightContainerWidth};
    height: ${highlightContainerHeight};
    margin-left: ${highlightContainerHeightMarginLeft};
    background-image: linear-gradient(to right, ${colors.primaryOne}, ${colors.primaryTwo});
    box-shadow: ${dropShadow.primary};
  `;

export default HighlightContainer;  