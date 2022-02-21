import { fireEvent, render, screen } from "@testing-library/react";
import reducer, { setToken } from "../store/tokenSlice";
import App from "../App";

test("should return initial state", () => {
  expect(reducer(undefined, "")).toEqual("");
});

test("should set the token", () => {
  const previousState = "";
  expect(reducer(previousState, setToken("hola"))).toEqual("hola");
});

test("should set the token to an existing token", () => {
  const previousState = "token1";
  expect(reducer(previousState, setToken("token2"))).toEqual("token2");
});

test("app have header nav buttons, click login, and redirect to login page", () => {
  render(<App />);

  screen.getByText("home.title");
  screen.getByText("header.authors");
  screen.getByText("header.help");
  fireEvent.click(screen.getAllByRole('link').find(a => a.getAttribute('href') === "/login"));

  screen.getByText("login.username");
});
