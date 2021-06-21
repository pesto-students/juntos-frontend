import Home from "./Home";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

test("Home: load with title", async () => {
  const { getByTestId } = render(<Home />, {
    wrapper: MemoryRouter,
  });
  await waitFor(() => {
    expect(getByTestId("header1")).toBeInTheDocument();
  });
});
