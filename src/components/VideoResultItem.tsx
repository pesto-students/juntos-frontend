import styled from "styled-components";

import { dropShadow } from "src/common/constants/dropShadow";
import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";
import { CustomStyleProps } from "src/common/interface";

const VideoResultItem = styled.div<CustomStyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${colors.black};
    width: ${props => (props.width || 379) + `px`};
    height: ${props => (props.height || 103) + `px`};
    margin: ${cssScale.c3};
    box-shadow: ${dropShadow.primary};
    img{
        margin: ${cssScale.c3};
    }
    p{
        color: ${colors.white};
        font-size: 14px;
        padding: 2px;
    }
  `;

export default VideoResultItem;   