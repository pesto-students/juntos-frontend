import styled from "styled-components";

import { colors, dropShadow } from "src/common/constants";

interface IHighlightContainer {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string
}

const defaultWidth = '900px';
const defaultHeight = '525px';
const marginLeft = '10%';

const HighlightContainer = styled.div<IHighlightContainer>`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    width: ${defaultWidth};
    height: ${defaultHeight};
    margin-left: ${marginLeft};
    background-image: linear-gradient(to right, ${colors.primaryOne}, ${colors.primaryTwo});
    box-shadow: ${dropShadow.primary};
  `;

export default HighlightContainer;  