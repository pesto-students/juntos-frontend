/**
 * Constants
 */
import {
  YoutubeLogo,
  DailymotionLogo,
  VimeoLogo,
  serviceProviderLogoWidth,
} from "src/common/constants";

/**
 * Styled Components
 */
import { MediaServiceProviderBoxContainer } from "src/SelectVideo/SelectVideo.styles";

/**
 * Interfaces
 */
interface IMediaServiceProviderBox {
  serviceProvider: string;
  clickable?: boolean;
  disabled?: boolean;
}

/**
 * MediaServiceProviderBox Component
 * @param props IMediaServiceProviderBox
 * @returns <MediaServiceProviderBoxContainer/>
 */
function MediaServiceProviderBox(props: IMediaServiceProviderBox) {
  const { serviceProvider, clickable, disabled } = props;
  let src: string = "";

  switch (serviceProvider) {
    case "youtube": {
      src = YoutubeLogo;
      break;
    }
    case "vimeo": {
      src = VimeoLogo;
      break;
    }
    case "dailymotion": {
      src = DailymotionLogo;
      break;
    }
  }

  return (
    <MediaServiceProviderBoxContainer clickable={clickable} disabled={disabled}>
      <img
        width={serviceProviderLogoWidth}
        src={src}
        alt={serviceProvider + "content discovery"}
      />
    </MediaServiceProviderBoxContainer>
  );
}

export default MediaServiceProviderBox;
