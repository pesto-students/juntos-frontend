import styled from "styled-components";

import { cssScale } from "src/common/constants";

interface IVideoResultContainer {
    width?: string
}

const defaultWidth = 792;

const VideoResultContainer = styled.div<IVideoResultContainer>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${props => (props.width || defaultWidth) + `px`};
    margin: ${cssScale.c2};
    overflow-y: scroll;
  `;

export default VideoResultContainer;   