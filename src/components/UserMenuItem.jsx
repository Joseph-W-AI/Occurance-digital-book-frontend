import './UserMenuItem.scss'

const UserMenuItem = ({ users }) => {
    return (
        <div className='usersMenu'>
            {users.map((user, index) => {
                return (
                    <div className='userMenuItem' key={index}>
                        <img className='userImg' src={user.userImage} alt="user" />
                        <p>{user.username}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UserMenuItem