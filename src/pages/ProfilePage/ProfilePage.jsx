import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import Profile from '../../components/ProfileComponents/Profile'
import './ProfilePage.css'


function ProfilePage() {

    const { user } = useContext(AuthContext)

    return (

        <>
            <Profile user={user} />
            SECCIÓN MIS PROYECTOS
            {/* {console.log('user del prof PAGE----', user)} */}
        </>

    )

}

export default ProfilePage