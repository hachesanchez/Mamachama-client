import { useContext } from 'react'
import Profile from '../../components/ProfileComponents/Profile'
import { AuthContext } from '../../contexts/auth.context'
import './ProfilePage.css'


function ProfilePage() {

    const { user } = useContext(AuthContext)

    return (

        <>
            <Profile user={user} />
            {/* {console.log('user del prof PAGE----', user)} */}
        </>

    )

}

export default ProfilePage