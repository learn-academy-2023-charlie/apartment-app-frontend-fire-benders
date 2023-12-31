import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<NotFound />, div);
  });
  it("renders an image", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    );
    const logo = screen.getByAltText(
      "Image of deadpool on 404 content not found page"
    );
    expect(logo).toHaveAttribute(
      "alt",
      "Image of deadpool on 404 content not found page"
    );
  });
});
