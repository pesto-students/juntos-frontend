/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common components
 */
import { ViewportSection, HighlightContainer, Button } from "src/components";
import { Text, TitleText } from "src/components/Text";
import Row from "src/components/FlexRow";
import { TranslucentInput } from "src/SelectVideo/SelectVideo.styles";
import { routes } from "src/common/constants";
/**
 * CreateLinkForLater Component
 * @returns <CreateLinkForLater/>
 */

const CreateLinkForLater: React.FunctionComponent<RouteComponentProps> = ({
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
            <TitleText margin="0 0 28px 28px">
              Invite <br />
              friends to <br /> your virtual theater.
            </TitleText>
            <Text margin="28px 0 28px 28px">
              Invite upto 8 friends.
              <br />
              Everyone can chat in a group.
            </Text>
          </div>
          <Row flexDirection="column" alignItems="center">
            <Text width="270px" textAlign="center" margin="0 0 16px">
              Copy this link and share it with your friends.
            </Text>
            {/* Auto share link genereation TBD */}
            <TranslucentInput width="270" placeholder="Share Link" />
            <Button ghost margin="16px 0 0">
              Copy Link
            </Button>
            <Button margin="16px 0 0">Host Now</Button>
          </Row>
        </Row>
        <Row justifyContent="flex-start">
          <Button margin="28px" onClick={() => history.push(routes.ABOUT)}>
            Learn More
          </Button>
        </Row>
      </HighlightContainer>
    </ViewportSection>
  );
};

export default CreateLinkForLater;
