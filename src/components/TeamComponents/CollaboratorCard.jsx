import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './CollaboratorCard.css';

function CollaboratorCard({ user }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);

    const openSocialMediaUrl = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCardClick = () => {
        if (user.socialMedia && user.socialMedia.length > 0) {
            const order = ['LinkedIn', 'Instagram', 'YouTube', 'Facebook'];
            for (let platform of order) {
                const socialMedia = user.socialMedia.find(social => social.platform === platform);
                if (socialMedia) {
                    openSocialMediaUrl(socialMedia.url);
                    break;
                }
            }
        }
    };

    return (
        <div
            className="collaboratorCard"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
        >
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
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
    );
}

export default CollaboratorCard;
