import styled from "styled-components";

import {
  dropShadow,
  highlightContainerWidth,
  highlightContainerHeight,
  cssScale,
} from "src/common/constants";
import { globalLinearBackground } from ".";

interface IHighlightContainer {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  backgroundImage?: string;
  width?: string;
  height?: string;
}

const HighlightContainer = styled.div<IHighlightContainer>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${({ width }) => width || highlightContainerWidth};
  height: ${({ height }) => height || highlightContainerHeight};
  box-shadow: ${dropShadow.primary};
  border-radius: ${cssScale.c2};
  padding: ${({ padding }) => padding || "unset"};
  background-image: ${({ backgroundImage }) =>
    backgroundImage || globalLinearBackground};
  background-size: cover;
`;

export default HighlightContainer;
