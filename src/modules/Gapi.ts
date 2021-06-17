/**
 * Interfaces
 */
import { ISearchResultData } from "src/common/interface";

/**
 * Utilities
 */
import {
    ISO8601toHumanReadable,
    viewsFormatter
} from "src/modules/Gapi.utils"
import { errorMessages } from "src/common/constants";

/**
 * Referencing global window object
 */
declare global {
  interface Window {
    gapi: any; 
  }
}

/**
 * Constants
 */
const {
    REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    REACT_APP_GOOGLE_YOUTUBE_API_KEY,
    REACT_APP_GOOGLE_AUTH_SCOPE_URL,
    REACT_APP_GOOGLE_YOUTUBE_API_URL
} = process.env;

class GoogleApi {
    
    private gapi: any;

    constructor() {
        this.gapi = window.gapi;
        this.init()
    }

    public async init(): Promise<void | any> {
        this.loadAndAuthenticateGapiClient()
        .then(() => this.loadYoutubeClient())
        .catch((err) => {
            alert(errorMessages.SOMETHING_WENT_WRONG)
            return err;
        });
    }

    private async loadAndAuthenticateGapiClient(): Promise<void | any> {
        try {
            const loadClient = await this.gapi.load('client:auth2');
            const initClient = await this.gapi.auth2.init({client_id: REACT_APP_GOOGLE_OAUTH_CLIENT_ID});
            const getAuthInstance = await this.gapi.auth2.getAuthInstance().signIn({scope: REACT_APP_GOOGLE_AUTH_SCOPE_URL});

            return Promise.all([
                loadClient,
                initClient,
                getAuthInstance
            ])
        } catch(err){
            return err;
        }
    }

    private async loadYoutubeClient(): Promise<void | any> {
        try {
            this.gapi.client.setApiKey(REACT_APP_GOOGLE_YOUTUBE_API_KEY);
            return await this.gapi.client.load(REACT_APP_GOOGLE_YOUTUBE_API_URL);
        } catch(err) {
            return err;
        }
    }

    public async searchYoutubeList(searchTerm: string): Promise<string[] | any> {
        try {
            const response = await this.gapi.client.youtube.search.list({
                "part": [
                    "snippet"
                ],
                "q": searchTerm
            })
            let videoIds: string[] = [];

            response.result.items.forEach((item: any) => {
                videoIds.push(item.id.videoId)
            });

            return videoIds;  
        } catch(err) {
            return [];
        }
    }
    
    public async searchYoutubeVideos(videoIds: string[]): Promise<ISearchResultData[] | any> {
        try {
            const response = await this.gapi.client.youtube.videos.list({
                "part": [
                    "snippet",
                    "statistics",
                    "status",
                    "contentDetails"
                ],
                "id": videoIds
            })
            let data: ISearchResultData[] = [];
            response.result.items.forEach((item: any) => {
                const humanReadableTime: string = ISO8601toHumanReadable(item.contentDetails.duration);
                data.push({
                    thumbnail: item.snippet.thumbnails.medium.url,
                    title: item.snippet.title,
                    duration: humanReadableTime,
                    channelName: item.snippet.channelTitle,
                    views: viewsFormatter(item.statistics.viewCount),
                    postDate: item.snippet.publishedAt,
                    imgAlt: item.snippet.title,
                    videoId: item.id
                })
                item.contentDetails["durationHR"] = humanReadableTime;
            });
            return data;  
        } catch(err) {
            return err;
        }
    }
}

export default GoogleApi;