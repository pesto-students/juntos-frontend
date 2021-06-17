import styled from "styled-components";

import {
  viewportSectionWidth,
  viewportSectionHeight
} from "src/common/constants";

const ViewportSection = styled.section`
    display: flex;
    align-items: center;
    min-width: ${viewportSectionWidth};
    min-height: ${viewportSectionHeight};
  `;

export default ViewportSection;  