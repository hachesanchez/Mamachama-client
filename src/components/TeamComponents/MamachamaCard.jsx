import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import './MamachamaCard.css';

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
                <p className="user-card-occupation">{user.occupation}</p>
                <div className="card-social-icons">
                    {user.socialMedia.map((social) => (
                        social.platform === 'LinkedIn' && (
                            <a key={social._id} target='blank' rel='noreferer noopener' href={social.url}>
                                <FaLinkedin />
                            </a>

                        )
                    ))}
                </div>
            </div>

        </>
    );
}

export default MamachamaCard;
