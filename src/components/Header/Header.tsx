import { ReactElement } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Link from "src/components/Link";
import { routes } from "src/common/constants/pageRoutes";
import "src/components/Header/Header.css";
import { User } from "src/modules/User";
import Button from "../Button";

import LogoutIcon from "src/assets/LogoutIcon";
import Logo from "src/assets/LogoWhiteBG.png";

const { ABOUT, CREATE_ROOM, AUTH } = routes;

const excludedPathName: Set<string> = new Set([AUTH]);

export default function Header({
  user,
  signOut,
}: {
  user: User | undefined;
  signOut: (() => Promise<void>) | undefined;
}): ReactElement {
  const { pathname } = useLocation();
  const { push } = useHistory();

  if (excludedPathName.has(pathname)) {
    return <></>;
  }

  const handleCreateRoom = () => {
    pathname !== CREATE_ROOM && push(CREATE_ROOM);
  };

  return (
    <div className=" drop-shadow">
      <div className="max-container">
        <nav className="landing-header ">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-container">
            <ol className="nav-list">
              <li>
                <Link to={ABOUT}>About</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Button small fontSize="12px" onClick={() => {}}>
                      Join Party
                    </Button>
                  </li>
                  <li>
                    <Button small fontSize="12px" onClick={handleCreateRoom}>
                      Host Party
                    </Button>
                  </li>
                  <li
                    title="logout"
                    onClick={() => signOut?.()}
                    className="logout"
                  >
                    <LogoutIcon />
                  </li>
                </>
              ) : (
                <li>
                  <Link to={AUTH}>Sign In</Link>
                </li>
              )}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}
