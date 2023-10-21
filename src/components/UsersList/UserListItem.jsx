import React from "react";
import styles from "./UserListItem.module.css";
import { BiTrashAlt } from "react-icons/bi";

function UserListItem(props) {
  const { user, index, removeUser, selectUser } = props;
  
  const listItemStyle = {
    backgroundColor: user.isSelected ? '#f0e2e2' : 'white'
  }

  return (
    <li style={listItemStyle} className={styles.listItem} onClickCapture={() => selectUser(index)}>
      <img
        className={styles.photo}
        src={user.photoSrc}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <div className={styles.info}>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.age}</p>
      </div>
      <button className={styles.deleteBtn} onClick={() => removeUser(index)}>
        <BiTrashAlt />
      </button>
    </li>
  );
}

export default UserListItem;
