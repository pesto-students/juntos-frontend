import styled from "styled-components";

import { cssScale, colors, dropShadow } from "src/common/constants";

interface IMediaServiceProviderBox{
  width?: string,
  height?: string
}

const defaultWidth = 190;
const defaultHeight = 115;

const MediaServiceProviderBox = styled.div<IMediaServiceProviderBox>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.primaryTwo};
    width: ${props => (props.width || defaultWidth) + `px`};
    height: ${props => (props.height || defaultHeight) + `px`};
    margin: ${cssScale.c2};
    box-shadow: ${dropShadow.primary};
  `;

export default MediaServiceProviderBox;   