import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getAllUsers() {
        return this.api.get(`/getAllUsers`);
    }

    getOneUser(userId) {
        return this.api.get(`/getOneUser/${userId}`);
    }

    // getUsersByRelation(relation) {
    //     return this.api.get(`/get${relation}`);
    // }

    getProjectsByUserId(userId) {
        return this.api.get(`/getUserProjects/${userId}`);
    }

    editUser(userId, userData) {
        return this.api.put(`/edit/${userId}`, userData);
    }

    deleteUser(userId) {
        return this.api.delete(`/delete/${userId}`);
    }


}

const authService = new UserService()
export default authService

// getAllUsers,
//     getOneUser,
//     getMamachama,
//     getCollaborators,
//     getPartner,
//     editUser,
//     deleteUser

// router.get('/getAllUsers', getAllUsers)
// router.get('/getOneUser/:id', getOneUser)
// router.get('/getMamachama', getMamachama)
// router.get('/getCollaborators', getCollaborators)
// router.get('/getPartner', getPartner)
// router.put('/edit/:id', isAuthenticated, editUser)
// router.delete('/delete/:id', isAuthenticated, deleteUser)