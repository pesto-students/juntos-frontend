import styled from "styled-components";

import { cssScale, Spinner } from "src/common/constants";

interface ISimpleSpinnerStyle {
    width?: string,
    marginTop?: string,
}
  
const defaultSpinnerWidth = cssScale.c8;
const defaultMarginTop = '100px';
  
const SimpleSpinnerImg = styled.img<ISimpleSpinnerStyle>`
    width: ${props => props.width || defaultSpinnerWidth};
    margin-top: ${props => props.marginTop || defaultMarginTop};;
`;

function SimpleSpinner() {
    return <SimpleSpinnerImg src={Spinner}/>
}
  
export default SimpleSpinner;  