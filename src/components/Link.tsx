import styled from "styled-components";
import { Link } from "react-router-dom";

import { cssScale } from "src/common/constants/cssScale";
import { colors } from "src/common/constants/colors";

export default styled(Link)`
  color: ${colors.blue2};
  text-decoration: none;
  margin: ${cssScale.c4} ${cssScale.c0};
`;
