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
import { routes } from "src/common/constants/pageRoutes";
import { toast } from "react-toastify";
import { copyToClipboard } from "src/common/utils";
import useShareLinkRedirect from "src/common/hooks/useShareLinkRedirect";
/**
 * CreateLinkForLater Component
 * @returns <CreateLinkForLater/>
 */

const CreateLinkForLater: React.FunctionComponent<
  RouteComponentProps<{}, {}, { shareLink: string }>
> = ({ history }) => {
  const shareLink = history.location?.state?.shareLink ?? "";

  useShareLinkRedirect();

  const handleCopyLink = () => {
    copyToClipboard(shareLink ?? "");
    toast.success("link copied");
  };

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
            <TranslucentInput
              disabled
              width="300"
              placeholder="Share Link"
              value={shareLink}
            />
            <Button ghost margin="16px 0 0" onClick={handleCopyLink}>
              Copy Link
            </Button>
            <Button
              onClick={() =>
                history.push(routes.SELECT_STREAMING_SERVICE, { shareLink })
              }
              margin="16px 0 0"
            >
              Host Now
            </Button>
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
