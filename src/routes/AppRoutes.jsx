import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage/PrivacyPolicyPage"
import PrivateRoute from "./PrivateRoutes"

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/contacta" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />

            <Route element={<PrivateRoute />}>

                <Route path="/perfil" element={<ProfilePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes