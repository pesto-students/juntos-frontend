import styled from "styled-components";

import { cssScale } from "src/common/constants/cssScale";

interface IVideoResultContainer {
    width?: string
}

const VideoResultContainer = styled.div<IVideoResultContainer>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${props => (props.width || 792) + `px`};
    margin: ${cssScale.c2};
    overflow-y: scroll;
  `;

export default VideoResultContainer;   