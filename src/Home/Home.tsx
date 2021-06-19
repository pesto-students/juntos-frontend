import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Button from "src/components/Button";
import { useAuth } from "src/context/GlobalContext";

interface IPage {
  name: string;
}

const HomePage: React.FunctionComponent<IPage & RouteComponentProps> = ({
  name,
}) => {
  const { globalState, actions } = useAuth();

  return (
    <div>
      <p>{name}</p>
      <p>Welcome {globalState.user?.getProfile().email}</p>
      <Link to="/about">Go to the About page!</Link>
      <Button onClick={actions?.signOut}>Logout</Button>
    </div>
  );
};

export default HomePage;
