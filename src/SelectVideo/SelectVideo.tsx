/**
 * React and packages
 */
import React, {useState} from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Internal Modules
 */
 import GoogleApi from "src/modules/Gapi";

/**
 * Common components
 */
import {
  ViewportSection,
  HighlightContainer,
  Button,
  SimpleSpinner
} from "src/components";

/**
 * Feature specific styled components
 */
import {
  CarouselContainer,
  VideoResultContainer,
  TranslucentInput
} from "src/SelectVideo/SelectVideo.styles";

/**
 * Feature specific local components
 */
import MediaServiceProviderBox from "src/SelectVideo/MediaServiceProviderBox";
import VideoResultItem from "src/SelectVideo/VideoResultItem";

/**
 * Interfaces
 */
import { IParams, ISearchResultData } from "src/common/interface";

/**
 * Constants
 */
import { errorMessages } from "src/common/constants"
const GoogleApiClient = new GoogleApi();

/**
 * SelectVideo Component
 * @returns <SelectVideo/>
 */
const SelectVideo: React.FunctionComponent<RouteComponentProps<IParams>> = () => {

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ISearchResultData[] | any>([]); 
  const [noResults, setNoResults] = useState<boolean>(false); 
  const [loadingResults, setLoadingResults] = useState<boolean>(false); 
  
  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      if(searchKeyword.length === 0) {
        alert(errorMessages.EMPTY_INPUT)
      } else {
        getSearchResults(searchKeyword);
      }
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    setSearchKeyword(value);
    if (value.length === 0) {
      setNoResults(false);
    }
  }

  async function getSearchResults(searchKeyword: string) {
    setLoadingResults(true);
    if(searchKeyword.length === 0) {
      // To be changed to Toast message later
      alert(errorMessages.EMPTY_INPUT)
      setLoadingResults(false);
      return;
    }

    try {
      const videoIds = await GoogleApiClient.searchYoutubeList(searchKeyword);
      const results: ISearchResultData[] | any = await GoogleApiClient.searchYoutubeVideos(videoIds);
      setSearchResults(results);
    } catch(err){
      console.log('Catch here',err)
    }
  }

  async function getSearchResultsOld(searchKeyword: string) {
      setLoadingResults(true);
      if(searchKeyword.length === 0) {
        // To be changed to Toast message later
        alert(errorMessages.SOMETHING_WENT_WRONG)
        setLoadingResults(false);
        return
      }
      const videoIds = await GoogleApiClient.searchYoutubeList(searchKeyword);
      console.log(videoIds)
      if(!videoIds || videoIds.length === 0) {
        // To be changed to Toast message later
        alert(errorMessages.SOMETHING_WENT_WRONG)
        setLoadingResults(false);
        return; 
      }
      const results: ISearchResultData[] | any = await GoogleApiClient.searchYoutubeVideos(videoIds);
      if(!results || results.length === 0) {
        // To be changed to Toast message later
        alert(errorMessages.SOMETHING_WENT_WRONG)
        setLoadingResults(false);
        return; 
      }

      if (results.status && results.status === 400){
        setNoResults(true);
        setSearchResults([]);
        setLoadingResults(false);
      }
      setSearchResults(results);
      setLoadingResults(false);
  }

  const renderSearchResults = () => {

    if(loadingResults) {
      return <SimpleSpinner/>
    }
    
    if (noResults){
      return <p>No Results</p>
    }
    
    if (searchResults.length)
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
          <MediaServiceProviderBox serviceProvider={'youtube'}/>
        </CarouselContainer>
        <TranslucentInput 
          placeholder="Search Video"
          onKeyDown={handleKeyDown}
          onChange={event => handleOnChange(event)}
        />
        <Button onClick={() => getSearchResults(searchKeyword)}>Search</Button>
        {renderSearchResults()}
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
