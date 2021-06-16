import React, {useState, useEffect} from "react";
import { RouteComponentProps } from "react-router-dom";

import { IParams, ISearchResultData } from "src/common/interface";

import ViewportSection from "src/components/ViewportSection";
import HighlightContainer from "src/components/HighlightContainer";
import CarouselContainer from "src/components/CarouselContainer";
import TranslucentInput from "src/components/TranslucentInput";
import MediaServiceProviderBox from "src/components/MediaServiceProviderBox";
import VideoResultContainer from "src/components/VideoResultContainer";
import VideoResultItem from "src/components/VideoResultItem";
import Button from "src/components/Button";

import YoutubeLogo from 'src/assets/serviceProviderLogos/youtube_white.svg';

import GoogleApi from "src/modules/Gapi";

const GoogleApiClient = new GoogleApi();

const SelectVideo: React.FunctionComponent<RouteComponentProps<IParams>> = () => {

  useEffect(() => {
    GoogleApiClient.loadGapiClientAuth2()
    .then(GoogleApiClient.authenticate)
    .then(GoogleApiClient.loadYoutubeClient);
  }, [])

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ISearchResultData[]>([]); 
  
  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      getSearchResults(searchKeyword);
    }
  }

  const getSearchResults = async (searchKeyword: string) => {
      const videoIds = await GoogleApiClient.searchYoutubeList(searchKeyword);
      if(!videoIds) {
        return; 
      }
      const results: ISearchResultData[] = await GoogleApiClient.searchYoutubeVideos(videoIds);
      if(!results) {
        return; 
      }
      setSearchResults(results);
      console.log(results)
  }

  const renderSearchResults = () => {

    if (searchResults.length === 0){
      return <p>No Results</p>
    }
    
    return (
      <VideoResultContainer>
        {searchResults.map((videoData: any) => {
          return <VideoResultItem data={videoData}/>
        })}
      </VideoResultContainer>
    )
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
        <Button onClick={() => getSearchResults(searchKeyword)}>Search</Button>
        {renderSearchResults()}
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
