import { handleCardClick } from '../../utils/handleCardClick'
import './PartnerCard.css'

function PartnerCard({ user }) {

    return (

        <>
            <div className="partnerCard" onClick={() => handleCardClick(user)}>
                <img src={user.avatar} alt={user.username} className='partner-avatar' />
            </div>
        </>
    )
}

export default PartnerCard