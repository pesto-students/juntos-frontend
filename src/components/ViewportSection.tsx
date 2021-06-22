import styled from "styled-components";

import {
  viewportSectionWidth,
  viewportSectionHeight,
  headerHeight
} from "src/common/constants";

const ViewportSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${viewportSectionWidth};
    min-height: calc(${viewportSectionHeight} - ${headerHeight});
  `;

export default ViewportSection;  