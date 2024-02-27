import { Card } from 'react-bootstrap'
import './MamachamaCard.css'
import { useState } from 'react'

function MamachamaCard({ user }) {

    const [showCardInfo, setShowCardInfo] = useState()

    return (


        <>
            <div className='user-card'>

                <img src={user.avatar} alt={user.username} />
                {/* <Card.Title>{user.username}</Card.Title> */}
                {/* <Card.Text>{user.description}</Card.Text> */}

            </div>
        </>
    )
}

export default MamachamaCard