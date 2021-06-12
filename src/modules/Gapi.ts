declare global {
  interface Window {
    gapi: any; 
  }
}

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
            await this.gapi.auth2.init({client_id: "882519420698-tlftoq7ljpu4r6uqr8329870jtbd71um.apps.googleusercontent.com"});
        } catch(err){
            console.log(`gapiAuth2Init Error: ${err}`);
        }
    }

    authenticate = async () => {
        try {
            await this.gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        } catch(err){
            console.log(`authenticate Error: ${err}`);
        }
    }

    loadYoutubeClient = async () => {
        try {
            this.gapi.client.setApiKey("AIzaSyDdXApkq6CN0lvPLR5k0kWwCpKOggYG_po");
            await this.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest");
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