/**
 * React and Packages
 */
import React from "react";

/**
 * Common component imports
 */
import PageNotFoundSVG from "src/assets/images/PageNotFoundSVG";
import { colors, routes } from "src/common/constants";
import FlexRow from "src/components/FlexRow";
import Link from "src/components/Link";
import { Text } from "src/components/Text";

/**
 *
 * @returns Not Found Page on invalid urls
 */
const NoPageFound: React.FunctionComponent = () => {
  return (
    <FlexRow flexDirection="column" margin="200px 0 0">
      <PageNotFoundSVG width="500" height="300" />

      <Text color={colors.black50} textAlign="center">
        <p>We couldn't find this page.</p>
        <p>
          Perhaps head back to the
          <Link color={colors.blue1} to={routes.HOME}>
            &nbsp;Home Page
          </Link>
          ?
        </p>
      </Text>
    </FlexRow>
  );
};

export default NoPageFound;
