import Home from "./Home";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

test("Home: load with title", async () => {
  const { getByText } = render(<Home name="Home Page" />, {
    wrapper: MemoryRouter,
  });
  expect(getByText("Home Page")).toBeInTheDocument();
  // expect(screen.getByRole('button')).toBeDisabled()
});
