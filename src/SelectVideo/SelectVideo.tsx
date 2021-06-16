import React, {useState} from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { IParams, ISearchResultData } from "src/common/interface";
import { cssScale } from "src/common/constants";
import {
  ViewportSection,
  HighlightContainer,
  TranslucentInput,
  MediaServiceProviderBox,
  VideoResultContainer,
  VideoResultItem,
  Button,
} from "src/components";
import YoutubeLogo from 'src/assets/serviceProviderLogos/youtube_white.svg';
import GoogleApi from "src/modules/Gapi";

interface ICarouselContainer {
  width?: string,
  height?: string
}

const serviceProviderLogoWidth = 122;
const carouselContainerDefaultWidth = 500;
const carouselContainerDefaultHeight = 130;

const CarouselContainer = styled.div<ICarouselContainer>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${props => (props.width || carouselContainerDefaultWidth) + `px`};
    height: ${props => (props.height || carouselContainerDefaultHeight) + `px`};
    margin: ${cssScale.c2};
  `;

const GoogleApiClient = new GoogleApi();

const SelectVideo: React.FunctionComponent<RouteComponentProps<IParams>> = () => {

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
  }

  const renderSearchResults = () => {

    if (searchResults.length === 0){
      return <p>No Results</p>
    }
    
    return (
      <VideoResultContainer>
        {searchResults.map((videoData: ISearchResultData) => {
          return <VideoResultItem key={videoData.videoId} data={videoData}/>
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
            <img width={serviceProviderLogoWidth} src={YoutubeLogo} alt={'youtube'}/>
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
