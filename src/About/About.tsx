import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { IParams } from "src/common/interface";

const AboutPage: React.FunctionComponent<RouteComponentProps<IParams>> = () => {
  return (
    <div>
      <p>About Page</p>
      <Link to="/">Go to the home page!</Link>
    </div>
  );
};

export default AboutPage;
