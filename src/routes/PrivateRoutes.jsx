import { useContext } from "react"
import { AuthContext } from "./../contexts/auth.context"
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const { user } = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default PrivateRoute
