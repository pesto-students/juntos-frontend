import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { routes } from "src/common/constants/pageRoutes";
import { useAuth } from "src/context/GlobalContext";
import "src/Home/Home.style.css";
import VideoInfluencerSVG from "src/assets/images/VideoInfluencerSVG";
import OnlineMediaSVG from "src/assets/images/OnlineMediaSVG";
import VideoFileSVG from "src/assets/images/VideoFileSVG";
import HomeCinemaSVG from "src/assets/images/HomeCinemaSVG";
import VideoStreamingSVG from "src/assets/images/VideoStreamingSVG";

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {
  const { globalState } = useAuth();

  return (
    <div className="body-gradient">
      <div className="max-container">
        <main className="landing-body">
          <section className="section section-one">
            <VideoInfluencerSVG height="550" width="750" />
            <div
              className="landing-sec-1-heading font-white"
              data-testid="header1"
            >
              Welcome to the Next-Gen theater
            </div>
            <hr className="landing-sec-heading-divider" />
            <div className="section-sub-heading font-white">
              Host video parties across the major streaming services, and
              connect with your friends and family watching your favorite shows.
            </div>
            <div className="section-button-container">
              <Link
                className="drop-shadow create-room-button font-white"
                to={globalState.user ? routes.CREATE_ROOM : routes.AUTH}
              >
                Host Party
              </Link>
              <Link
                className="drop-shadow learn-more-button font-white"
                to={routes.ABOUT}
              >
                Learn More
              </Link>
            </div>
          </section>
          <section className="section section-one">
            <div className="landing-multi-image-container">
              <VideoFileSVG
                width="300"
                height="181"
                className="landing-sec-2-img"
              />
              <OnlineMediaSVG className="landing-sec-3-img" />
            </div>
            <div className="landing-sec-2-heading font-white">
              <span>CREATE YOUR THEATRE, OWN IT</span>
            </div>
            <hr className="landing-sec-heading-divider" />
            <div className="section-sub-heading font-white">
              Host a video party for up to a thirty guests, or have a virtual
              movie night with friends. Hop on the website and take charge while
              your show is synced for everyone.
            </div>
            <div className="section-button-container justify-content-center">
              <Link
                className="drop-shadow learn-more-button font-white"
                to={routes.ABOUT}
              >
                Learn More
              </Link>
            </div>
          </section>
          <section className="section section-one">
            <div className="landing-multi-image-container">
              <HomeCinemaSVG width="360" className="landing-sec-4-img"/>
              <VideoStreamingSVG className=" landing-sec-5-img"/>
            </div>
            <div className="landing-sec-2-heading font-white">
              <span>ENJOY TOGETHER, WHEREVER</span>
            </div>
            <hr className="landing-sec-heading-divider" />
            <div className="section-sub-heading font-white">
              From Youtube to Dailymotion, Juntos supports video parties across
              the most streaming services globally. All you need is a sign up,
              watch everything free* - Juntos handles the rest.
            </div>
            <div className="section-button-container justify-content-center">
              <Link
                className="drop-shadow create-room-button font-white"
                to={globalState.user ? routes.CREATE_ROOM : routes.AUTH}
              >
                Host Party
              </Link>
            </div>
          </section>
        </main>
      </div>
      <section className="section section-one footer">
        © 2021 Copyright: Juntos.com
      </section>
    </div>
  );
};

export default HomePage;