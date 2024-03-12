import axios from "axios";

class ProjectService {

constructor() {
    this.api = axios.create({
        baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/project`
    })

    this.api.interceptors.request.use((config) => {

        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            config.headers = { Authorization: `Bearer ${storedToken}` }
        }

        return config
    })
 }
 
     getAllProjects() {
        return this.api.get(`/getAllProjects`);
    }

      getOneProject(projectId) {
        return this.api.get(`/getOneProject/${projectId}`);
    }

      saveProject(projectData) {
        return this.api.post(`/saveProject`, projectData);
    }

      editProject(projectId, projectData) {
        return this.api.put(`/editProject/${projectId}`, projectData);
    }

      deleteProject(projectId) {
        return this.api.delete(`/deleteProject/${projectId}`);
    }
 
}

const projectService = new ProjectService()
export default projectService