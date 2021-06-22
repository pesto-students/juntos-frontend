/**
 * React and react packages
 */
import styled, { css } from "styled-components";

/**
 * Constants
 */
import {
  cssScale,
  colors,
  dropShadow,
  carouselContainerWidth,
  carouselContainerHeight,
  mediaServiceProviderBoxWidth,
  mediaServiceProviderBoxHeight,
  videoResultContainerWidth,
  videoResultItemContainerWidth,
  videoResultItemContainerHeight,
  translucentInputWidth,
  translucentInputHeight,
} from "src/common/constants";

/**
 * Interfaces
 */
interface ICarouselContainer {
  width?: string;
  height?: string;
}

interface IMediaServiceProviderBoxContainer {
  width?: string;
  height?: string;
  clickable?: boolean;
  disabled?: boolean;
}

interface IVideoResultContainer {
  width?: string;
}

interface IVideoResultItemContainer {
  width?: string;
  height?: string;
}

interface ITranslucentInput {
  width?: string;
  height?: string;
}

/**
 * Styled components
 */
const CarouselContainer = styled.div<ICarouselContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => (props.width || carouselContainerWidth) + `px`};
  height: ${(props) => (props.height || carouselContainerHeight) + `px`};
  margin: ${cssScale.c2};
`;

const MediaServiceProviderBoxContainer = styled.div<IMediaServiceProviderBoxContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => (props.width || mediaServiceProviderBoxWidth) + `px`};
  height: ${(props) => (props.height || mediaServiceProviderBoxHeight) + `px`};
  margin: ${cssScale.c2};
  border-radius: ${cssScale.c2};
  box-shadow: ${dropShadow.primary};
  background: ${colors.blue2};
  transition: transform 80ms ease-in-out;
  ${({ clickable }) =>
    clickable &&
    css`
      &:active {
        transform: scale(0.9);
      }
      cursor: pointer;
    `}
  ${({ disabled }) => disabled && css`
    background: ${colors.silverChalice};
  `}
`;

const VideoResultContainer = styled.div<IVideoResultContainer>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(props) => (props.width || videoResultContainerWidth) + `px`};
  margin: ${cssScale.c2};
  overflow-y: scroll;
`;

const VideoResultItemContainer = styled.div<IVideoResultItemContainer>`
  display: flex;
  flex-direction: row;
  background-color: ${colors.codGrey};
  width: ${(props) => (props.width || videoResultItemContainerWidth) + `px`};
  height: ${(props) => (props.height || videoResultItemContainerHeight) + `px`};
  margin: ${cssScale.c2};
  box-shadow: ${dropShadow.primary};
  > .result-thumbnail {
    position: relative;
    > .img-thumbnail {
      max-width: 100%;
      max-height: 100%;
      padding: ${cssScale.c1};
    }
    > .duration {
      height: ${cssScale.c5};
      background-color: ${colors.black50};
      border-radius: ${cssScale.c1};
      color: ${colors.white};
      position: absolute;
      padding: ${cssScale.c1};
      bottom: ${cssScale.c1};
      right: ${cssScale.c1};
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: ${cssScale.c3};
      font-weight: bold;
    }
  }
  > .result-data {
    flex: 1;
    padding: ${cssScale.c1};
    > .data-title {
      color: ${colors.white};
      font-size: ${cssScale.c4};
      line-height: ${cssScale.c5};
      height: ${cssScale.c12};
    }
    > .data-meta {
      color: ${colors.silverChalice};
      font-size: ${cssScale.c3};
      > .music-note {
        width: ${cssScale.c3};
      }
      > .meta-separator {
        display: inline-flex;
        width: ${cssScale.c1};
        height: ${cssScale.c1};
        background-color: ${colors.silverChalice};
        border-radius: 50%;
        margin-left: ${cssScale.c1};
        margin-right: ${cssScale.c1};
      }
    }
  }
`;

const TranslucentInput = styled.input<ITranslucentInput>`
  width: ${(props) => (props.width || translucentInputWidth) + `px`};
  min-height: ${(props) => (props.height || translucentInputHeight) + `px`};
  margin: ${cssScale.c2};
  border-width: ${cssScale.c0};
  outline: ${cssScale.c0};
  padding-left: ${cssScale.c3};
  padding-right: ${cssScale.c3};
  box-shadow: ${dropShadow.primary};
  background: ${colors.codGrey20};
  caret-color: ${colors.white};
  text-align: center;
  font-weight: bold;
  color: ${colors.white};
  ::placeholder {
    color: ${colors.white30};
  }
`;

/**
 * Exports
 */
export {
  CarouselContainer,
  MediaServiceProviderBoxContainer,
  VideoResultContainer,
  VideoResultItemContainer,
  TranslucentInput,
};
