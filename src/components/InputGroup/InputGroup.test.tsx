import {  render, screen } from "@testing-library/react";
import {  InputGroup } from ".";

describe("InputGroup tests", () => {
  it("Should render input", () => {
    render(<InputGroup />);

    const input = screen.getByPlaceholderText("Add your activity here");
    expect(input).toBeTruthy();
  });

  it("Should render button", () => {
    render(<InputGroup />);

    const button = screen.getByTitle("button-input");
    expect(button).toBeTruthy();
  });
});
