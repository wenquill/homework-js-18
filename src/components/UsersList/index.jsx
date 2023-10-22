import {useState} from 'react';
import UserListItem from './UserListItem'
import style from './UserListItem.module.css'
const USERS_DB = [
    {
      id: 1,
      firstName: 'Mila',
      lastName: 'York',
      age: 28,
      photoSrc: 'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      profession: 'Web Designer',
      statistics: 95,
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Brown',
      age: 31,
      photoSrc:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profession: 'Web Designer',
      statistics: 56,
    },
    {
      id: 3,
      firstName: 'Layla',
      lastName: 'Staff',
      age: 70,
      photoSrc:
        'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
      profession: 'Frontend Developer',
      statistics: 89,
    },
    {
      id: 4,
      firstName: 'Ryan',
      lastName: 'Bob',
      age: 20,
      photoSrc:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww',
      profession: 'System Administrator',
      statistics: 91,
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      photoSrc:
        'https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww',
      profession: 'Data Analyst',
      statistics: 33,
    }
  ]

function UsersList() {
    const [users, setUsers] = useState(
        USERS_DB.map(u => ({...u}))
    )

    function removeUser(index) {
        const usersCopy = [...users];
        usersCopy.splice(index, 1);
        setUsers(usersCopy);
    }

    function selectUser (index) {
        const usersCopy = [...users];
        usersCopy[index] = { ...users[index], isSelected: !users[index].isSelected };
        setUsers(usersCopy);
    }

    function mapUsers(user, index) {
        return (
            <UserListItem 
                key={user.id}
                user={user}
                index={index}
                removeUser={removeUser}
                selectUser={selectUser}
            />
        )
    }

  return (
    <ul className={style.usersList}>{users.map(mapUsers)}</ul>
  )
}

export default UsersList