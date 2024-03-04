import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './CollaboratorCard.css';
import ReactCardFlip from 'react-card-flip'

function CollaboratorCard({ user }) {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleMouseEnter = () => {
        setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        setIsFlipped(false);
    };

    const navigate = useNavigate()

    const handleCardClick = () => {
        console.log('mecliko')
        navigate('/')
    }

    return (
        <>
            <div className="collaboratorCard"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
            >
                <ReactCardFlip
                    flipDirection='horizontal'
                    isFlipped={isFlipped}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}

                >
                    <div className="collaboratorCard">
                        <img className="collaborator-avatar" src={user.avatar} alt="" />
                    </div>

                    <div className="collaboratorCard back">
                        <img className="collaborator-avatar-back" src={user.avatar} alt="" />
                        <div className="collaborator-info">
                            <p className="collaborator-card-name">{user.username}</p>
                            <p className="collaborator-card-occupation">{user.occupation}</p>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </>
    )
}

export default CollaboratorCard;
