import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import './CollaboratorCard.css'

function CollaboratorCard({ user }) {

    const [isHovered, setIsHovered] = useState(false);


    return (

        <>
            <div className={`colaborator-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="collaborator-card">
                    <img className='collaborator-card-avatar' src={user.avatar} alt={user.username} />
                </div>

                <div className="collaborator-card-info">
                    <p className="collaborator-card-name">
                        {user.username}
                    </p>
                    <p className="collaborator-card-occupation">
                        {user.occupation}
                    </p>
                </div>
            </div>


        </>
    )
}

export default CollaboratorCard