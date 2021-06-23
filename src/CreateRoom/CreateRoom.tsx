/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
            <TitleText margin="28px 0 28px 28px">Create Room!</TitleText>
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
              onClick={() =>
                history.push(routes.SELECT_STREAMING_SERVICE, {
                  shareLink: uuidv4(),
                })
              }
              ghost
            >
              Host now
            </Button>
          </div>
          <div>
            <Button
              ghost
              onClick={() =>
                history.push(routes.CREATE_LINK_FOR_LATER, {
                  shareLink: uuidv4(),
                })
              }
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
