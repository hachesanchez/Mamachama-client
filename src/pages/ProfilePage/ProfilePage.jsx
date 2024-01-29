import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import Profile from '../../components/ProfileComponents/Profile'
import MyProjects from '../../components/ProfileComponents/MyProjects'
import './ProfilePage.css'


function ProfilePage() {

    const { user, logout } = useContext(AuthContext)

    return (

        <>
            <Profile user={user} logout={logout} />

            <MyProjects user={user} />
        </>

    )

}

export default ProfilePage