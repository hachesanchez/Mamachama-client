import './PartnerCard.css'

function PartnerCard({ user }) {

    return (

        <>
            <div className="partnerCard">
                <img src={user.avatar} alt={user.username} className='partner-avatar' />
            </div>
        </>
    )
}

export default PartnerCard