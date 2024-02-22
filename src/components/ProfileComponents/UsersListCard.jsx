import { Card, Container, Row, Image } from "react-bootstrap";
import './UsersListCard.css'


export default function UsersListCard({ user }) {

    return (


        <>

            <div className="users-list">
                <Card className="user-list-card mb-4">
                    <Card.Img src={user.avatar} className=" " />
                </Card>
            </div>


        </>

    );
}
