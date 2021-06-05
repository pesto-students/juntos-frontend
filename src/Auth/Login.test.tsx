import Login from "./Login";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";

test("Login page: render with form input", async () => {
  const { getByTestId } = render(<Login />, { wrapper: MemoryRouter });
  expect(getByTestId("emailInput")).toBeInTheDocument();
  expect(getByTestId("passwordInput")).toBeInTheDocument();
  expect(getByTestId("signInBtn")).toBeInTheDocument();
});

test("Login page: test form input changes", async () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Login />
    </Router>
  );
  const emailInput = getByTestId("emailInput");
  const passInput = getByTestId("passwordInput");

  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  expect(emailInput).toHaveValue("test@test.com");
  fireEvent.change(passInput, { target: { value: "123456" } });
  expect(passInput).toHaveValue("123456");
});