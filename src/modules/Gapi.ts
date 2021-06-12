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
        const { gapi } = window;
        this.gapi = gapi;
    }

    loadGapiClientAuth2 = async () => {
        try {
            await new Promise((resolve,reject) => {
                this.gapi.load('client:auth2', resolve);
            });
            await this.gapiAuth2Init()
        } catch(err){
            console.log(`loadGapiClientAuth2 Error: ${err}`);
        }
    }

    gapiAuth2Init = async () => {
        try {
            await this.gapi.auth2.init({client_id: REACT_APP_GOOGLE_OAUTH_CLIENT_ID});
        } catch(err){
            console.log(`gapiAuth2Init Error: ${err}`);
        }
    }

    authenticate = async () => {
        try {
            await this.gapi.auth2.getAuthInstance()
            .signIn({scope: REACT_APP_GOOGLE_AUTH_SCOPE_URL})
        } catch(err){
            console.log(`authenticate Error: ${err}`);
        }
    }

    loadYoutubeClient = async () => {
        try {
            this.gapi.client.setApiKey(REACT_APP_GOOGLE_YOUTUBE_API_KEY);
            await this.gapi.client.load(REACT_APP_GOOGLE_YOUTUBE_API_URL);
        } catch(err) {
            console.log(`loadYoutubeClient Error: ${err}`)
        }
    }

    searchYoutube = async (searchTerm: string) => {
        try {
            const response = await this.gapi.client.youtube.search.list({
                "part": [
                    "snippet"
                ],
                "q": searchTerm
            })
            return response;  
        } catch(err) {
            console.log('searchYoutube: ERROR ', err)
        }
    }    
}

export default GoogleApi;