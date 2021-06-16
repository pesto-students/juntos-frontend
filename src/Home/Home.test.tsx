import Home from "./Home";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

test("Home: load with title", async () => {
  const { getByText } = render(<Home name="Home Page" />, {
    wrapper: MemoryRouter,
  });
  await waitFor(() => {
    expect(getByText("Home Page")).toBeInTheDocument();
  });
});
