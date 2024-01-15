import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import LoginPage from "../pages/LoginPage/LoginPage"

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/contacta" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />

        </Routes>
    )
}

export default AppRoutes