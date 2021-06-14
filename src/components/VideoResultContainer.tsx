import styled from "styled-components";

import { dropShadow } from "src/common/constants/dropShadow";
import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

const VideoResultContainer = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${props => (props.width || 792) + `px`};
    border: 1px solid yellow;
    margin: ${cssScale.c2};
    overflow-y: scroll;
  `;

export default VideoResultContainer;   