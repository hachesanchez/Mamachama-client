import { useEffect, useState } from 'react'
import Header from '../../components/HomeComponents/Header'
import AboutSection from '../../components/HomeComponents/AboutSection'
import NewsSection from '../../components/HomeComponents/NewsSection'
import ContactSection from '../../components/HomeComponents/ContactSection'
import POVSection from '../../components/HomeComponents/POVSection'
import projectService from '../../services/project.services'
import Loader from '../../components/Loader/Loader'
import './HomePage.css'


function HomePage() {

    useEffect(() => {
        loadLatestProjects()
    }, [])

    const [latestProjects, setLatestProjects] = useState([])

    const loadLatestProjects = () => {
        projectService
            .getLatestProjects()
            .then(({ data }) => {
                setLatestProjects(data)
            })
            .catch((err) => {
                console.log('Error fetching latest projects:', err)
            })
    }


    return (

        <>
            < div className="Homepage" >
                <Header />
                <AboutSection />
                {!latestProjects ? <Loader /> : <NewsSection latestProjects={latestProjects} />}
                <POVSection />
                <ContactSection />
            </div >
        </>
    )
}

export default HomePage

