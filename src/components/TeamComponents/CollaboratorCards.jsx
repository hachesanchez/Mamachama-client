import './CollaboratorCards.css'

function CollaboratorCards({ user }) {

    return (

        <>
            <p>
                {console.log(user)}
                <div className="collab-card-normal">
                    <img className='collab-card-avatar' src={user.avatar} alt={user.username} />
                </div>
            </p>


        </>
    )
}

export default CollaboratorCards