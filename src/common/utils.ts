export const scrollToBottom: (ref: React.RefObject<HTMLDivElement>) => void = (
  ref
) => {
  if (ref.current) {
    ref.current.scrollBy({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }
};

export const copyToClipboard: (textToCopy: string) => void = (textToCopy) => {
  navigator.clipboard.writeText(textToCopy);
};

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex = /^.{6,}$/;

export const nameRegex = /[a-zA-Z]{3,}/;

export const validateRegex: (str: string, regex: RegExp) => boolean = (
  str,
  regex
) => {
  if (str.match(regex)) {
    return true;
  } else {
    return false;
  }
};
