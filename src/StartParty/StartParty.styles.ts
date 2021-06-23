import { colors } from "src/common/constants/colors";
import { cssScale } from "src/common/constants/cssScale";
import styled from "styled-components";

export const PartyWrapper = styled.div`
  width: 100%;
`;

export const VideoWrapper = styled.div`
  width: 80%;
  display: inline-block;
  text-align: center;
`;

export const ChatWrapper = styled.div`
  width: 20%;
  position: fixed;
  height: calc(100vh - 60px);
  display: inline-block;
  background-color: ${colors.brown1};
  padding-bottom: ${cssScale.c1};
  vertical-align: top;
  overflow: scroll;
`;
