/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common components
 */
import { ViewportSection, HighlightContainer } from "src/components";
import { Text } from "src/components/Text";
import Row from "src/components/FlexRow";
import { TranslucentInput } from "src/SelectVideo/SelectVideo.styles";
import { routes } from "src/common/constants";
import MediaServiceProviderBox from "src/SelectVideo/MediaServiceProviderBox";
/**
 * SelectStreamingService Component
 * @returns <SelectStreamingService/>
 */

const SelectStreamingService: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
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
          <TranslucentInput placeholder="Enter video URL" />
        </div>
        <Text margin="64px 0 0">Choose Streaming Service</Text>
        <Row>
          <div onClick={() => history.push(routes.SELECT_VIDEO)}>
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
