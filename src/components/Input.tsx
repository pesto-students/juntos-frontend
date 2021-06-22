import { colors, cssScale } from "src/common/constants";
import styled from "styled-components";

export default styled.input`
  background-color: ${colors.grey2};
  border: none;
  padding: ${cssScale.c3} ${cssScale.c4};
  margin: ${cssScale.c2} ${cssScale.c0};
  width: 100%;
  border-radius: ${cssScale.c1};
`;
