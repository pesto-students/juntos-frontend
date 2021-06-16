import { ISearchResultData } from "src/common/interface";

declare global {
  interface Window {
    gapi: any; 
  }
}

const {
    REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    REACT_APP_GOOGLE_YOUTUBE_API_KEY,
    REACT_APP_GOOGLE_AUTH_SCOPE_URL,
    REACT_APP_GOOGLE_YOUTUBE_API_URL
} = process.env;

class GoogleApi {
    
    gapi: any;

    constructor() {
        this.gapi = window.gapi;
        this.init()
    }

    async init(): Promise<void> {
        this.loadGapiClientAuth2()
        .then(() => this.authenticate())
        .then(() => this.loadYoutubeClient());
    }

    async loadGapiClientAuth2(): Promise<void> {
        try {
            await new Promise((resolve,reject) => {
                this.gapi.load('client:auth2', resolve);
            });
            await this.gapiAuth2Init()
        } catch(err){
            Promise.reject(err);
        }
    }

    async gapiAuth2Init(): Promise<void> {
        try {
            await this.gapi.auth2.init({client_id: REACT_APP_GOOGLE_OAUTH_CLIENT_ID});
        } catch(err){
            Promise.reject(err);
        }
    }

    async authenticate(): Promise<void> {
        try {
            await this.gapi.auth2.getAuthInstance()
            .signIn({scope: REACT_APP_GOOGLE_AUTH_SCOPE_URL})
        } catch(err){
            Promise.reject(err);
        }
    }

    async loadYoutubeClient(): Promise<void> {
        try {
            this.gapi.client.setApiKey(REACT_APP_GOOGLE_YOUTUBE_API_KEY);
            await this.gapi.client.load(REACT_APP_GOOGLE_YOUTUBE_API_URL);
        } catch(err) {
            Promise.reject(err);
        }
    }

    async searchYoutubeList(searchTerm: string): Promise<string[]> {
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
    
    async searchYoutubeVideos(videoIds: string[]): Promise<ISearchResultData[]> {
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
                const humanReadableTime: string = GoogleApi.ISO8601toHumanReadable(item.contentDetails.duration);
                data.push({
                    thumbnail: item.snippet.thumbnails.medium.url,
                    title: item.snippet.title,
                    duration: humanReadableTime,
                    channelName: item.snippet.channelTitle,
                    views: GoogleApi.viewsFormatter(item.statistics.viewCount),
                    postDate: item.snippet.publishedAt,
                    imgAlt: item.snippet.title,
                    videoId: item.id
                })
                item.contentDetails["durationHR"] = humanReadableTime;
            });
            return data;  
        } catch(err) {
            return [];
        }
    }
    
    static getDUrationByUnit(input: string, unit: string): string{
        let index = input.indexOf(unit);
        let output = "00";
        
        if(index < 0){
            return output;
        }
   
        if(isNaN(parseInt(input.charAt(index-2)))) {
            return '0' + input.charAt(index-1);
        } else {
            return input.charAt(index-2) + input.charAt(index-1);
        }
    }

    static ISO8601toHumanReadable(input:string): string {
        let H = this.getDUrationByUnit(input, 'H');
        let M = this.getDUrationByUnit(input, 'M');
        let S = this.getDUrationByUnit(input, 'S');
   
       if (H === "00") {
         H = "";
       } else {
         H += ":"
       }
   
       return H  + M + ':' + S ;
     }

    static viewsFormatter(num: number): string {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toString();
   }
}

export default GoogleApi;