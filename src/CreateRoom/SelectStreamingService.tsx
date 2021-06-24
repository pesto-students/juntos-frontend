/**
 * React and packages
 */
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common components
 */
import { ViewportSection, HighlightContainer, Button } from "src/components";
import { Text } from "src/components/Text";
import Row from "src/components/FlexRow";
import { TranslucentInput } from "src/SelectVideo/SelectVideo.styles";
import { routes } from "src/common/constants";
import MediaServiceProviderBox from "src/SelectVideo/MediaServiceProviderBox";
import useShareLinkRedirect from "src/common/hooks/useShareLinkRedirect";
/**
 * SelectStreamingService Component
 * @returns <SelectStreamingService/>
 */

const SelectStreamingService: React.FunctionComponent<
  RouteComponentProps<
    {},
    {},
    { shareLink: string; videoUrl?: string; isHost?: boolean }
  >
> = ({ history }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");

  const shareLink = history.location?.state?.shareLink ?? "";
  useShareLinkRedirect();

  return (
    <ViewportSection>
      <HighlightContainer
        flexDirection={`column`}
        alignItems="center"
        padding="36px"
      >
        <div>
          <Text margin="0 0 16px" textAlign="center">
            Enter URL:
          </Text>
          <TranslucentInput
            placeholder="Enter video URL"
            onChange={(e) => setVideoUrl(e.target.value)}
            value={videoUrl}
          />
        </div>
        <Button
          margin="12px 0 0"
          onClick={() =>
            videoUrl &&
            history.push(routes.START_PARTY, {
              shareLink,
              videoUrl,
              isHost: true,
            })
          }
        >
          Start Party
        </Button>
        <Text margin="64px 0 0">Choose Streaming Service</Text>
        <Row>
          <div onClick={() => history.push(routes.SELECT_VIDEO, { shareLink })}>
            <MediaServiceProviderBox clickable serviceProvider={"youtube"} />
          </div>
          <MediaServiceProviderBox disabled serviceProvider={"vimeo"} />
          <MediaServiceProviderBox disabled serviceProvider={"dailymotion"} />
        </Row>
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectStreamingService;
