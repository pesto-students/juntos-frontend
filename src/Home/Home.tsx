import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface IPage {
  name: string
}

const HomePage: React.FunctionComponent<IPage & RouteComponentProps<any>> = ({
  name,
}) => {
  return (
    <div>
      <p>{name}</p>
      <Link to="/about">Go to the About page!</Link>
    </div>
  );
};

export default HomePage;
