import { useState } from 'react';
import './MamachamaCard.css';
import { Row } from 'react-bootstrap';

function MamachamaCard({ user }) {

    const [isHovered, setIsHovered] = useState(false);

    return (

        <>
            <div className={`user-card ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="user-card-normal">
                    <img className='user-card-avatar' src={user.avatar} alt={user.username} />
                </div>

                <div className="user-card-info">
                    <p className="user-card-description">{user.description}</p>
                </div>

            </div>
            <div className="user-card-title">
                <p className="user-card-name">{user.username}</p>
            </div>

        </>
    );
}

export default MamachamaCard;
