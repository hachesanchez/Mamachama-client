import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ContactPage from "../pages/ContactPage/ContactPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage/PrivacyPolicyPage"
import PrivateRoute from "./PrivateRoutes"
import CookiesPage from "../pages/CookiesPage/CookiesPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import TeamPage from "../pages/TeamPage/TeamPage"
import WeDoPage from "../pages/WeDoPage/WeDoPage"
import InvisibilizadasPage from "../pages/InvisibilizadasPage/InvisibilizadasPage"
import CateringPage from "../pages/CateringPage/CateringPage"
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage"

function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/somos" element={<AboutPage />} />
            <Route path="/somos/nuestro-equipo" element={<TeamPage />} />
            <Route path="/hacemos" element={<WeDoPage />} />
            <Route path="/colabora/invisibilizadas" element={<InvisibilizadasPage />} />
            <Route path="/colabora/catering" element={<CateringPage />} />
            <Route path="/hacemos/proyectos" element={<ProjectsPage />} />
            <Route path="/contacta" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/politica-de-cookies" element={<CookiesPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/perfil" element={<ProfilePage />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes