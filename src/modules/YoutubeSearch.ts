import { YOTUBE_DATA_API_V3 } from "src/common/constants/api";

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

const YTParams = {
  part: "snippet",
  maxResults: "10",
  key: REACT_APP_YOUTUBE_API_KEY ?? "",
};

export const fetchVideoIds = async (params: { [key: string]: string }) => {
  const response = await fetch(
    `${YOTUBE_DATA_API_V3}/search?` +
      new URLSearchParams({
        ...YTParams,
        ...params,
      })
  );
  return response.json();
};

export const fetchVideoData = async (params: { [key: string]: string }) => {
  const response = await fetch(
    `${YOTUBE_DATA_API_V3}/videos?` +
      new URLSearchParams({
        ...YTParams,
        ...params,
      })
  );

  return response.json();
};
