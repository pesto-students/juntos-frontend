import styled from "styled-components";
import { colors } from "../common/colors";

export const AuthenticationWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f5f7;
  height: 100vh;
  align-items: center;
  margin-top: -20px;

  p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: ${colors.primaryTwo};
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  @media (max-width: 768px) {
    margin-top: -20px;
    padding: 16px;
  }
`;
