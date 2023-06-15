import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";

describe("<Footer />", () => {
it("renders without crashing", () => {
    render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    );

    const component = document.querySelector('#home')

    expect(component).toBeInTheDocument

    });

}); 