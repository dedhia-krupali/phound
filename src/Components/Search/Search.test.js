import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

test("renders search bar", async () => {
  render(
    <Search
      setNewUrl={() => {}}
      userInput={""}
      setUserInput={() => {}}
      returnToHomepage={() => {}}
    />
  );

  const response = screen.findAllByTestId("search-form");

  expect(response).toBeInTheDocument;
});
