import { Container, Row, Col } from 'react-bootstrap'
import MamachamaCard from '../../components/TeamComponents/MamachamaCard'
import userService from '../../services/user.services'
import { useEffect, useState } from 'react'
import './TeamPage.css'
import CollaboratorCards from '../../components/TeamComponents/CollaboratorCards'

function TeamPage() {

    const [mamachamaUsers, setMamachamaUser] = useState()
    const [collaboratorUsers, setCollaboratorUser] = useState()


    useEffect(() => {
        loadMamachamaUsers()
        loadCollabUsers()
    }, [])


    const loadMamachamaUsers = () => {
        userService
            .getMamachama()
            .then(({ data }) => {
                setMamachamaUser(data)
            })
            .catch((err) => {
                console.log('Error fetching Mamachama users:', err)
            })
    }

    const loadCollabUsers = () => {
        userService
            .getCollaborators()
            .then(({ data }) => {
                setCollaboratorUser(data)
            })
            .catch((err) => {
                console.log('Error fetching Collaborator users:', err)
            })
    }



    return (

        <>
            <div className="Team">

                <div className="page-title">
                    <h1 className="page-title-text">Equipo de trabajo</h1>
                </div>

                <div className="mamachama-section">
                    <Container>
                        <p className="page-subtitle">
                            Nuestro equipo de trabajo se conforma por dos profesionales y se complementa
                            con una red de colaboraciones habituales.
                        </p>
                        <div className="user-card-component">
                            {mamachamaUsers?.map((MamachamaUser) => (
                                <div className='user-card-col' >
                                    <MamachamaCard key={MamachamaUser.id} user={MamachamaUser} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>

                <div className="collaborators-section">
                    <Container className='collaborators-container'>
                        <h2 className='mt-4 mb-3 collaborators-title'>Red de colaboraciones</h2>
                        <p className='collaborators-body'>
                            Colaboramos con un red de profesionales que se han comprometido con los objetivos y fines de la asociación,
                            aportando su tiempo, recursos y conocimientos en distintos ámbitos y ejes de actuación.
                        </p>
                        <div className="collaborator-card-component">
                            {collaboratorUsers?.map((CollabUser) => (
                                <div className="collab-card-col">
                                    <CollaboratorCards key={CollabUser.id} user={CollabUser} />
                                </div>
                            ))}
                        </div>
                    </Container>

                </div>


            </div>
        </>
    )
}

export default TeamPage