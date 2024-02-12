import { Card, Container, Row } from "react-bootstrap";
import './UsersListCard.css'


export default function UsersListCard({ user }) {

    return (

        <Container >
            <Row className="justify-content-center user-list-component">

                <div className="users-list">
                    <Card className="user-list-card">
                        <Card.Img src={user.avatar} className="imagencoño" />
                    </Card>
                </div>
                <div className="users-list">
                    <Card className="user-list-card">
                        <Card.Img src={user.avatar} className="imagencoño" />
                    </Card>
                </div>

            </Row>
        </Container>
    );
}
