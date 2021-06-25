import styled from "styled-components";

import {
  viewportSectionWidth,
  viewportSectionHeight,
  headerHeight,
} from "src/common/constants";

const ViewportSection = styled.section<{ background?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${viewportSectionWidth};
  min-height: calc(${viewportSectionHeight} - ${headerHeight});
  background: ${({ background }) => background ?? "inherit"};
`;

export default ViewportSection;
