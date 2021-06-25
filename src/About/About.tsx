/**
 * React and packages
 */
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common component imports
 */
import {
  globalLinearBackground,
  HighlightContainer,
  ViewportSection,
} from "src/components";
import FlexRow from "src/components/FlexRow";
import { Text } from "src/components/Text";
import {
  MovieTogether,
  ShareEmotions,
  ConnectMore,
  AboutCoverImage,
} from "src/common/constants/images";
/**
 * @returns About Page
 */
const AboutPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <ViewportSection background={globalLinearBackground}>
      <FlexRow flexDirection={`column`} margin="24px 0 0">
        <HighlightContainer
          flexDirection={`column`}
          justifyContent="flex-start"
          alignItems="center"
          padding="36px"
          backgroundImage={`url(${AboutCoverImage})`}
        >
          <FlexRow alignItems="flex-start">
            <div>
              <Text width="200px">
                Create your show,
                <br />
                gather your folks,
                <br />
                start the parties,
                <br />
                express yourself.
              </Text>
            </div>
            <div>
              <Text fontWeight="light">
                Juntos is the best way to watch shows and movies with others.
                Whether you’re looking to hang out privately with friends, or
                connect with fans in your virtual theater, Scener is the only
                way to watch premium entertainment from the major services in
                perfect sync with people around the world.
              </Text>
            </div>
          </FlexRow>
        </HighlightContainer>
        <FlexRow width="900px" justifyContent="space-between" margin="24px">
          <HighlightContainer
            backgroundImage={`url(${MovieTogether})`}
            width="240px"
            height="240px"
          />
          <HighlightContainer
            backgroundImage={`url(${ConnectMore})`}
            width="240px"
            height="240px"
          />
          <HighlightContainer
            backgroundImage={`url(${ShareEmotions})`}
            width="240px"
            height="240px"
          />
        </FlexRow>
      </FlexRow>
    </ViewportSection>
  );
};

export default AboutPage;
