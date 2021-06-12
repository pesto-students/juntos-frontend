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
  
  const handleKeyDown = async (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const result = await GoogleApiClient.searchYoutube(searchKeyword);
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
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
