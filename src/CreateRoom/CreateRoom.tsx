/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common components
 */
import { ViewportSection, HighlightContainer, Button } from "src/components";
import OnlineParty from "src/assets/images/OnlineParty";
import { Text, TitleText } from "src/components/Text";
import Row from "src/components/FlexRow";
import { routes } from "src/common/constants";
/**
 * CreateRoom Component
 * @returns <CreateRoom/>
 */

const CreateRoom: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  return (
    <ViewportSection>
      <HighlightContainer
        flexDirection={`column`}
        justifyContent="flex-start"
        alignItems="center"
        padding="36px"
      >
        <Row>
          <div>
            <TitleText margin="28px">Create Room!</TitleText>
            <Text margin="28px">
              Invite upto 8 friends.
              <br />
              Everyone can chat in a group.
            </Text>
          </div>
          <div>
            <OnlineParty width="450" height="300" />
          </div>
        </Row>
        <Row justifyContent="space-around">
          <div>
            <Button
              onClick={() => history.push(routes.SELECT_STREAMING_SERVICE)}
              ghost
            >
              Host now
            </Button>
          </div>
          <div>
            <Button
              ghost
              onClick={() => history.push(routes.CREATE_LINK_FOR_LATER)}
            >
              Create link for later
            </Button>
          </div>
        </Row>
      </HighlightContainer>
    </ViewportSection>
  );
};

export default CreateRoom;
