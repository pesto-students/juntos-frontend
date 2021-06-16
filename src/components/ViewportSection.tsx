import styled from "styled-components";

const defaultWidth = '100wh';
const defaultHeight = '100vh';

const ViewportSection = styled.section`
    display: flex;
    align-items: center;
    min-width: ${defaultWidth};
    min-height: ${defaultHeight};
  `;

export default ViewportSection;  