import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { handleCardClick } from '../../utils/handleCardClick';
import './CollaboratorCard.css';

function CollaboratorCard({ user }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);




    return (

        <div
            className="collaboratorCard"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(user)}
        >
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
                <div className="collaboratorCard">
                    <img className="collaborator-avatar" src={user.avatar} alt={user.username} />
                </div>
                <div className="collaboratorCard back">
                    <img className="collaborator-avatar-back" src={user.avatar} alt={user.username} />
                    <div className="collaborator-info">
                        <p className="collaborator-card-name">{user.username}</p>
                        <p className="collaborator-card-occupation">{user.occupation}</p>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default CollaboratorCard;
