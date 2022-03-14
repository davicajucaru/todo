import { getByText, render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header tests", () => {
  it("Should render title text", () => {
    render(<Header />);

    const titleHeader = screen.getByText("To.Do");
    expect(titleHeader).toBeTruthy();
  });
});
