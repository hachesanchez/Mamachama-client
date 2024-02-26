import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import Profile from '../../components/ProfileComponents/Profile'
import MyProjects from '../../components/ProfileComponents/MyProjects'
import userService from '../../services/user.services'
import './ProfilePage.css'


function ProfilePage() {


    const { user, setUser, logout } = useContext(AuthContext)
    const [projects, setProjects] = useState([])
    const [userList, setUserList] = useState([])

    useEffect(() => {
        loadProjects()
        loadUsers()
    }, [])


    const loadUsers = () => {
        userService
            .getAllUsers()
            .then(({ data }) => {
                setUserList(data)
            })
            .catch(error => {
                console.error('Error fetching user list:', error)
            })
    }


    const loadProjects = () => {
        if (user?._id) {
            userService
                .getProjectsByUserId(user._id)
                .then(({ data }) => {
                    setProjects(data)
                })
                .catch(error => {
                    console.error('Error fetching user projects:', error)
                })
        }
    }


    const updateProfile = (updatedUserData) => {
        setUser({ ...user, ...updatedUserData })
    }


    const handleDeleteUser = (userId) => {
        const confirmation = window.confirm(`¿Estás segura de que quieres eliminar a ${user.username}?`)
        if (confirmation) {
            userService
                .deleteUser(userId)
                .then(() => {
                    updateUserList({ deleted: [userId] })
                })
                .catch(error => {
                    console.error('Error deleting user:', error)
                })
        }
    }


    const updateUserList = (updatedUsers) => {
        setUserList(prevUserList => {
            const { deleted = [], added = [] } = updatedUsers
            const filteredList = prevUserList.filter(user => !deleted.includes(user._id))
            return [...filteredList, ...added]
        })

    }


    const handleAddUser = (newUser) => {
        updateUserList({ added: [newUser], deleted: [] })
    }


    const userProjects = projects && Array.isArray(projects) ? projects : []


    return (

        <>
            <div className="profile-component">
                <Profile
                    user={user}
                    logout={logout}
                    updateProfile={updateProfile}
                    userList={userList}
                    updateUserList={updateUserList}
                    handleAddUser={handleAddUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className="myprojects-component">
                <MyProjects user={user} projects={userProjects} />
            </div>
        </>

    )
}

export default ProfilePage
