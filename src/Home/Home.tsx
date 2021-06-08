import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { IParams } from "src/common/interface";

interface IPage {
  name: string
}

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<IParams>> =
  ({ name }) => {
    return (
      <div>
        <p>{name}</p>
        <Link to="/about">Go to the About page!</Link>
      </div>
    );
  };

export default HomePage;
