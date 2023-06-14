import React, { useState } from "react"
import mockUsers from "./mockUsers.js"
import mockApartments from "./mockApartments.js"
import Header from "./components/Header.js"
import ApartmentEdit from "./pages/ApartmentEdit.js"
import ApartmentIndex from "./pages/ApartmentIndex.js"
import ApartmentNew from "./pages/ApartmentNew.js"
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js"
import ApartmentShow from "./pages/ApartmentShow.js"
import home from "./pages/Home.js"
import NotFound from "./pages/NotFound.js"
import SignIn from "./pages/SignIn.js"
import SignUp from "./pages/SignUp.js"
import Footer from "./components/footer.js"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  return (
    <>
      <h3>Apartment App</h3>
    </>
  )
}

