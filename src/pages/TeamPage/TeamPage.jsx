import { Container, Row, Col } from 'react-bootstrap'
import TeamComponents from '../../components/TeamComponents/TeamComponents'
import MamachamaCard from '../../components/TeamComponents/MamachamaCard'
import PartnerCards from '../../components/TeamComponents/PartnerCards'
import userService from '../../services/user.services'
import { useEffect, useState } from 'react'
import './TeamPage.css'

function TeamPage() {

    const [mamachamaUsers, setMamachamaUser] = useState()


    useEffect(() => {
        loadMamachamaUsers()
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



    return (

        <>
            <div className="Team">

                <div className="page-title">
                    <h1 className="page-title-text">Equipo de trabajo</h1>
                </div>

                <Container>

                    <TeamComponents />

                    <Row className="user-card-component">
                        {mamachamaUsers?.map((user) => (
                            <Col md={6} sm={12} className='user-card-col' >
                                <MamachamaCard key={user.id} user={user} />
                            </Col>
                        ))}
                    </Row>

                    <PartnerCards />

                </Container>

            </div>
        </>
    )
}

export default TeamPage