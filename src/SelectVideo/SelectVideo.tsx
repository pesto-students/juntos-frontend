/**
 * React and packages
 */
import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 * Common components
 */
import {
  ViewportSection,
  HighlightContainer,
  Button,
  SimpleSpinner,
} from "src/components";

import { fetchVideoIds, fetchVideoData } from "src/modules/YoutubeSearch";

/**
 * Feature specific styled components
 */
import {
  CarouselContainer,
  VideoResultContainer,
  TranslucentInput,
} from "src/SelectVideo/SelectVideo.styles";

/**
 * Feature specific local components
 */
import MediaServiceProviderBox from "src/SelectVideo/MediaServiceProviderBox";
import VideoResultItem from "src/SelectVideo/VideoResultItem";

/**
 * Interfaces
 */
import { ISearchResultData } from "src/common/interface";

/**
 * Constants
 */
import { errorMessages } from "src/common/constants";
import { ISO8601toHumanReadable, viewsFormatter } from "src/common/Gapi.utils";
import { toast } from "react-toastify";

/**
 * SelectVideo Component
 * @returns <SelectVideo/>
 */
const SelectVideo: React.FunctionComponent<RouteComponentProps> = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISearchResultData[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [loadingResults, setLoadingResults] = useState<boolean>(false);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      if (searchKeyword.length) {
        getSearchResults(searchKeyword);
      }
    }
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearchKeyword(value);
    if (value.length === 0) {
      setNoResults(false);
    }
  }

  const getVideoIds = (data: any) => {
    return data.map((item: any) => item.id.videoId);
  };

  const createSearchResultData = (data: any) => {
    const searchData: ISearchResultData[] = data?.map((item: any) => ({
      thumbnail: item.snippet.thumbnails.medium.url,
      title: item.snippet.title,
      duration: ISO8601toHumanReadable(item.contentDetails.duration),
      channelName: item.snippet.channelTitle,
      views: viewsFormatter(item.statistics.viewCount),
      postDate: item.snippet.publishedAt,
      imgAlt: item.snippet.title,
      videoId: item.id,
    }));
    return searchData;
  };

  async function getSearchResults(searchKeyword: string) {
    if (searchKeyword.length) {
      setLoadingResults(true);
      try {
        const YTDataSearch = await fetchVideoIds({
          q: searchKeyword,
        });
        const youtubeVideoListResponse = await fetchVideoData({
          part: ["snippet", "statistics", "status", "contentDetails"].join(","),
          id: getVideoIds(YTDataSearch.items).join(","),
        });
        setSearchResults(
          createSearchResultData(youtubeVideoListResponse.items)
        );
      } catch (err) {
        toast.error(err ?? errorMessages.SOMETHING_WENT_WRONG);
      } finally {
        setLoadingResults(false);
      }
    }
  }

  const renderSearchResults = () => {
    if (loadingResults) {
      return <SimpleSpinner />;
    }

    if (noResults) {
      return <p>No Results</p>;
    }

    if (searchResults.length)
      return (
        <VideoResultContainer>
          {searchResults.map((videoData: ISearchResultData) => {
            return <VideoResultItem key={videoData.videoId} data={videoData} />;
          })}
        </VideoResultContainer>
      );
  };

  return (
    <ViewportSection>
      <HighlightContainer
        flexDirection={`column`}
        justifyContent={`flex-start`}
        alignItems={`center`}
      >
        <CarouselContainer>
          <MediaServiceProviderBox serviceProvider={"youtube"} />
        </CarouselContainer>
        <TranslucentInput
          placeholder="Search Video"
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
        />
        <Button margin="12px 0 0" onClick={() => getSearchResults(searchKeyword)} >Search</Button>
        {renderSearchResults()}
      </HighlightContainer>
    </ViewportSection>
  );
};

export default SelectVideo;
