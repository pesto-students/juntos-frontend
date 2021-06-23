/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";
/**
 * Common components
 */
import { ViewportSection, HighlightContainer, Button } from "src/components";
import HavingFunSVG from "src/assets/images/HavingFunSVG";
import { Text, TitleText } from "src/components/Text";
import Row from "src/components/FlexRow";
import { routes } from "src/common/constants";
import { TranslucentInput } from "src/SelectVideo/SelectVideo.styles";
/**
 * JoinRoom Component
 * @returns <JoinRoom/>
 */

const JoinRoom: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  return (
    <ViewportSection>
      <HighlightContainer
        justifyContent="space-around"
        alignItems="center"
        padding="36px"
      >
        <Row flexDirection={`column`}>
          <TitleText>Join Room</TitleText>
          <Text margin="0 0 28px" textAlign="center">
            Watch video together.
            <br />
            Everyone can chat in a group.
          </Text>
          <TranslucentInput width="300" placeholder="Enter join link" />
          <br />
          <Button onClick={() => history.push(routes.START_PARTY)}>
            Join Now
          </Button>
        </Row>
        <div>
          <HavingFunSVG width="400" height="260" />
        </div>
      </HighlightContainer>
    </ViewportSection>
  );
};

export default JoinRoom;
