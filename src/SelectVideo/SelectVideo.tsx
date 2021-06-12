import React, {useState, useEffect} from "react";
import { RouteComponentProps } from "react-router-dom";

import { IParams } from "src/common/interface";

import ViewportSection from "src/components/ViewportSection";
import HighlightContainer from "src/components/HighlightContainer";
import CarouselContainer from "src/components/CarouselContainer";
import TranslucentInput from "src/components/TranslucentInput";

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
      const results = await GoogleApiClient.searchYoutube(searchKeyword);
      setSearchResults(results.result.items);
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
          Youtube-Box  
        </CarouselContainer>
        <TranslucentInput 
          placeholder="Search Video"
          onKeyDown={handleKeyDown}
          onChange={event => setSearchKeyword(event.target.value)}
        />
        {searchResults.map((videoData: any) => {
          const thumbnail = videoData.snippet.thumbnails.default.url;
          return <img key={videoData.eTag} src={thumbnail} alt={videoData.snippet.description}/>;
        })}
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
