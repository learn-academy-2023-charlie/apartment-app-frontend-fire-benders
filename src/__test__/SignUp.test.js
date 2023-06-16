import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";

describe("<SignUp />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const component = document.querySelector("#SignUp");

    expect(component).toBeInTheDocument;
  });
});
