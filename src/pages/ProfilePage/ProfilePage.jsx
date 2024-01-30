import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import Profile from '../../components/ProfileComponents/Profile'
import MyProjects from '../../components/ProfileComponents/MyProjects'
import userService from '../../services/user.services'
import './ProfilePage.css'


function ProfilePage() {


    const { user, logout } = useContext(AuthContext)
    const [projects, setProjects] = useState([])


    useEffect(() => {
        loadProjects()
    }, [])


    const loadProjects = () => {
        userService
            .getProjectsByUserId(user._id)
            .then(({ data }) => {
                setProjects(data)
            })
            .catch(error => {
                console.error('Error fetching user projects:', error);
            })
    }


    const userProjects = projects && Array.isArray(projects) ? projects : [];


    return (

        <>
            <Profile user={user} logout={logout} />
            <MyProjects user={user} projects={userProjects} />
        </>

    )

}

export default ProfilePage