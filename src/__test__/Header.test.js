import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import '@testing-library/jest-dom';

describe("<Header />", () => {
    it("renders without crashing", () => {
    render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>
    );

    const component = document.querySelector("#header");

    expect(component).toBeInTheDocument;
});


});
