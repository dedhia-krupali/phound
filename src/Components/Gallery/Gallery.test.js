import { render, screen } from "@testing-library/react";
import { Gallery } from "./Gallery";

test("renders null", async () => {
  render(<Gallery response={null} />);

  const response = screen.findAllByTestId("null-data");

  expect(response).toBeInTheDocument;
});
