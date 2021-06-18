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
