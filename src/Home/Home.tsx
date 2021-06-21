import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { routes } from "src/common/constants/pageRoutes";
import { useAuth } from "src/context/GlobalContext";
import "src/Home/Home.style.css";

const HomePage: React.FunctionComponent<RouteComponentProps> = () => {
  const { globalState } = useAuth();

  return (
    <div className="body-gradient">
      <div className="max-container">
        <main className="landing-body">
          <section className="section section-one">
            <img
              className="landing-sec-1-img"
              src="https://res.cloudinary.com/uwtcdn/image/upload/v1623896378/sample_party_screen_p0rkqm.svg"
              alt="Let's you party with your friends"
            />
            <div className="landing-sec-1-heading font-white" data-testId="header1">
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
                Watch Party
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
              <img
                className="landing-sec-2-img"
                src="https://res.cloudinary.com/uwtcdn/image/upload/v1623896378/video_files_nhtdwn.svg"
                alt="Select content from youtube, vimeo, daily-motion"
              />
              <img
                className=" landing-sec-3-img"
                src="https://res.cloudinary.com/uwtcdn/image/upload/v1623896377/online_media_glncpk.svg"
                alt="Search and find your preferred content to watch"
              />
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
              <img
                className=" landing-sec-4-img"
                src="https://res.cloudinary.com/uwtcdn/image/upload/v1623896377/home_cinema_p7sdkw.svg"
                alt="Enjoy movie nights from comfort of your sofa"
              />
              <img
                className=" landing-sec-5-img"
                src="https://res.cloudinary.com/uwtcdn/image/upload/v1623896378/video_streaming_duvmrt.svg"
                alt="Connect via multiple devices, across different time zones"
              />
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
                Watch Party
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

// {/* // <div>
// //   <p>{name}</p>
// //   <p>Welcome {globalState.user?.getProfile().email}</p>
// //   <Link to="/about">Go to the About page!</Link>
// //   <Button onClick={actions?.signOut}>Logout</Button>
// // </div> */}
