import "@testing-library/jest-dom";
import Page from "@/app/page";
import { screen, render } from "@testing-library/react";

describe("Main Page", () => {
  test("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
