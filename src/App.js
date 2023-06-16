import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import Header from "./components/Header.js";
import ApartmentEdit from "./pages/ApartmentEdit.js";
import ApartmentIndex from "./pages/ApartmentIndex.js";
import ApartmentNew from "./pages/ApartmentNew.js";
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js";
import ApartmentShow from "./pages/ApartmentShow.js";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp.js";
import Footer from "./components/Footer.js";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [apartments, setApartments] = useState(mockApartments);
  const createApartment = (createdApartment) => {
    console.log("my created apartment:", createdApartment);
  };
  return (
    <>
      <Header />
      <h3>Apartment App</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apartmentedit"
          element={<ApartmentEdit apartments={apartments} />}
        />
        <Route
          path="/apartmentindex"
          element={<ApartmentIndex apartments={apartments} />}
        />
        <Route
          path="/apartmentnew"
          element={<ApartmentNew createapartment={createApartment} />}
        />
        <Route
          path="/apartmentshow/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
