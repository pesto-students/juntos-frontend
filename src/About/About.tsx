import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

const AboutPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <p>About Page</p>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default AboutPage;
