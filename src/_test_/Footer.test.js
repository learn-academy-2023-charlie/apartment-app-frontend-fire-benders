import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const component = document.querySelector('#footer')

    expect(component).toBeInTheDocument

  });

}); 
