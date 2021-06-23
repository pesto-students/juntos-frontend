import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { routes } from "src/common/constants/pageRoutes";

const useShareLinkRedirect: () => void = () => {
  const history = useHistory<{ shareLink: string }>();
  const shareLink = history.location?.state?.shareLink ?? "";

  useEffect(() => {
    if (!shareLink) {
      history.replace(routes.CREATE_ROOM);
    }
  }, [history, shareLink]);
};

export default useShareLinkRedirect;
