import styles from './UserItem.module.css'

const UserItem = ({user}) =>{
    return <div className={styles.userItem}>{user.name}</div>
}
export default UserItem;