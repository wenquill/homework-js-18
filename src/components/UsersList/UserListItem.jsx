import React from "react";
import styles from "./UserListItem.module.css";
import { BiTrashAlt } from "react-icons/bi";

function UserListItem(props) {
  const { user, index, removeUser, selectUser } = props;
  
  const listItemStyle = {
    backgroundColor: user.isSelected ? '#f0e2e2' : 'transparent'
  }

  function statisticsColor() {
    if(user.statistics >= 90) {
      return '#6e8f6b'
    } else if (user.statistics >= 50) {
      return '#c2c967'
    } else {
      return '#c96767'
    }
  }

  const statisticsStreakStyle = {
    width: `${user.statistics}%`,
    backgroundColor: statisticsColor()
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
          {user.firstName} {user.lastName}, {user.age}
        </p>
        <p>{user.username}</p>
      </div>
        <div className={styles.statistics}>
          <p>{user.statistics}%</p>
          <div className={styles.statisticsStreak}></div>
          <div style={statisticsStreakStyle} className={styles.statisticsStreakColored}></div>
        </div>
        <button className={styles.deleteBtn} onClick={() => removeUser(index)}>
          <BiTrashAlt />
        </button>
    </li>
  );
}

export default UserListItem;
