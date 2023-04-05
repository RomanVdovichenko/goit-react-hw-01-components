import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import classNames from 'classnames';


export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(item => {
                return (
                    <FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline} />
                )
            })}           
        </ul>
    );
}

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={styles.item}>
            <span className={classNames(styles.status, isOnline ? styles.color_online : styles.color_ofline) }></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })).isRequired
}
