import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

test("container shows images", async () => {
  render(<Container />);

  const response = screen.findAllByTestId("image");

  expect(response).length == 10;
});
