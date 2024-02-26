import { Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs"
import './UsersListCard.css'


export default function UsersListCard({ user, updateUserList, handleDeleteUser }) {


    const deleteUser = (userId) => {
        handleDeleteUser(userId)
        updateUserList(userId)

    }


    return (

        <>
            <Card className="user-list-card">
                <div className="user-list-images">

                    <Card.Img src={user.avatar} className="user-avatar" alt="user avatar" />

                    {/* <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id={`tooltip-edit-${user.id}`}>Editar a {user.username}</Tooltip>}
                    >
                        <div className="edit-icon-wrapper">
                            <BsPencilFill className="edit-icon" onClick={handleOpenEditProfileModal} />
                        </div>
                    </OverlayTrigger> */}

                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id={`tooltip-delete-${user.id}`}>Borrar a {user.username}</Tooltip>}
                    >
                        <div className="delete-icon-wrapper">
                            <BsTrash3Fill className="delete-icon" onClick={() => deleteUser(user._id)} />
                        </div>
                    </OverlayTrigger>

                </div>
            </Card>

        </>
    )
}
