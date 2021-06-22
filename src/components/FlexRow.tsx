import styled from "styled-components";

interface IFlexRow {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
}

export default styled.div<IFlexRow>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  padding: ${({ padding }) => padding || "unset"};
  margin: ${({ margin }) => margin || "unset"};
`;
