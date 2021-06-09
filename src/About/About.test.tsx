import About from "src/About/About";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

test("Home: load with title", async () => {
  const { getByText } = render(<About />, {
    wrapper: MemoryRouter,
  });
  await waitFor(() => {
    expect(getByText("About Page")).toBeInTheDocument();
  });
});
