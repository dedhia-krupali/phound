import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

test("renders null", async () => {
  const res = {
    page: 1,
    perPage: 10,
  };
  render(<Pagination response={res} setNewUrl={() => {}} />);

  const response = screen.findAllByTestId("page-numbe");

  expect(response).toBeInTheDocument;
});
