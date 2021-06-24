/**
 * Constants
 */
import { musicNote } from "src/common/constants";

/**
 * Styled components
 */
import { VideoResultItemContainer } from "src/SelectVideo/SelectVideo.styles";

/**
 * Utilities
 */
import { fromNow, truncate } from "src/SelectVideo/VideoResultItem.utils";

/**
 * Interfaces
 */
import { ISearchResultData } from "src/common/interface";
interface IVideoResultItem {
  data: ISearchResultData;
  onClick: (data: ISearchResultData) => void;
}

/**
 * VideoResultItem Component
 * @param props IVideoResultItem
 * @returns VideoResultItemContainer
 */
function VideoResultItem(props: IVideoResultItem) {
  const { data, onClick } = props;

  const handleHostVideo = () => {
    onClick(data);
  };

  return (
    <VideoResultItemContainer onClick={handleHostVideo}>
      <div className="result-thumbnail">
        <img className="img-thumbnail" src={data.thumbnail} alt={data.imgAlt} />
        <div className="duration">{data.duration}</div>
      </div>
      <div className="result-data">
        <div className="data-title">{truncate(data.title, 44)}</div>
        <p className="data-meta">
          {data.channelName}
          <img className="music-note" src={musicNote} alt="music note" />
        </p>
        <p className="data-meta">
          {data.views} views
          <span className="meta-separator"></span>
          {fromNow(data.postDate)}
        </p>
      </div>
    </VideoResultItemContainer>
  );
}

export default VideoResultItem;
