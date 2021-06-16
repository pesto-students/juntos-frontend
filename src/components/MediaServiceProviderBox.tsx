import styled from "styled-components";

import { cssScale, colors, dropShadow } from "src/common/constants";

interface IMediaServiceProviderBox{
  width?: string,
  height?: string
}

const MediaServiceProviderBox = styled.div<IMediaServiceProviderBox>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.primaryTwo};
    width: ${props => (props.width || 190) + `px`};
    height: ${props => (props.height || 115) + `px`};
    margin: ${cssScale.c2};
    box-shadow: ${dropShadow.primary};
  `;

export default MediaServiceProviderBox;   