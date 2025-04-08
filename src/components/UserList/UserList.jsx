import { connect } from 'react-redux';
import UserItem from '../UserItem/UserItem.jsx';

import styles from './UserList.module.css'

const UserList = ({ users, filter }) => {
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div className={styles.userList}>
            {filteredUsers.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users,
    filter: state.filter,
});

export default connect(mapStateToProps)(UserList);