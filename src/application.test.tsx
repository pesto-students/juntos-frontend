import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Application from "./application";
import * as routes from "./common/pageRoutes";

test("Application : Successful Login flow", async () => {
  const history = createMemoryHistory();
  history.push(routes.AUTH);
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Application />
    </Router>
  );
  // add data to emailInput and proceed with login
  await waitFor(() => {
    const emailInput = getByTestId("emailInput");
    const passInput = getByTestId("passwordInput");
    fireEvent.change(emailInput, {
      target: { value: "test@test.com" },
    });
    fireEvent.change(passInput, {
      target: { value: "123456" },
    });
    const loginBtn = getByTestId("signInBtn");
    fireEvent.click(loginBtn);
  });
  // after login land to home page
  await waitFor(() => {
    expect(getByText(/Home Page/)).toBeInTheDocument();
  });
});
