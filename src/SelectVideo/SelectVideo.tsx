import React, {useState, useEffect} from "react";
import { RouteComponentProps } from "react-router-dom";

import { IParams } from "src/common/interface";

import ViewportSection from "src/components/ViewportSection";
import HighlightContainer from "src/components/HighlightContainer";
import CarouselContainer from "src/components/CarouselContainer";
import TranslucentInput from "src/components/TranslucentInput";
import MediaServiceProviderBox from "src/components/MediaServiceProviderBox";
import VideoResultContainer from "src/components/VideoResultContainer";
import VideoResultItem from "src/components/VideoResultItem";

import YoutubeLogo from 'src/assets/serviceProviderLogos/youtube_white.svg';

import GoogleApi from "src/modules/Gapi";

const GoogleApiClient = new GoogleApi();

const SelectVideo: React.FunctionComponent<RouteComponentProps<IParams>> = () => {

  useEffect(() => {
    GoogleApiClient.loadGapiClientAuth2()
    .then(GoogleApiClient.authenticate)
    .then(GoogleApiClient.loadYoutubeClient);
  }, [])

  const [searchKeyword, setSearchKeyword] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 
  
  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const videoIds = await GoogleApiClient.searchYoutubeList(searchKeyword);
      const results = await GoogleApiClient.searchYoutubeVideos(videoIds!);
      // setSearchResults(results.result.items);
      console.log(results)
    }
  }
  
  return (
    <ViewportSection>
      <HighlightContainer 
        flexDirection={`column`}
        justifyContent={`flex-start`}
        alignItems={`center`}
      >
        <CarouselContainer>
          <MediaServiceProviderBox>
            <img width="122" src={YoutubeLogo} alt={'youtube'}/>
          </MediaServiceProviderBox>
        </CarouselContainer>
        <TranslucentInput 
          placeholder="Search Video"
          onKeyDown={handleKeyDown}
          onChange={event => setSearchKeyword(event.target.value)}
        />
        <VideoResultContainer>
          {searchResults.map((videoData: any) => {
            const thumbnail = videoData.snippet.thumbnails.medium.url;
            return <VideoResultItem>
              <img key={videoData.eTag} src={thumbnail} alt={videoData.snippet.description}/>;
              <p>{videoData.snippet.title.replace(/&quot;/g, '\"')}</p>
            </VideoResultItem>
          })}
        </VideoResultContainer>
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
