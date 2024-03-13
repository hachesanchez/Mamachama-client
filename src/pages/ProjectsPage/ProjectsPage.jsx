import React from 'react'
import ProjectCard from '../../components/PorjectComponents/ProjectCard'
import './ProjectsPage.css'

function ProjectsPage() {

    return (
        <>
            <div className="page-title">
                <h1 className="page-title-text">PROYECTOS</h1>
            </div>
            <div className='projects-card-list'>
                <ProjectCard />
            </div>
        </>
    )
}

export default ProjectsPage
