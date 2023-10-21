import {useState} from 'react';
import UserListItem from './UserListItem'
import style from './UsersList.module.css'
const USERS_DB = [
    {
      id: 1,
      firstName: 'Mila',
      lastName: 'York',
      age: 28,
      photoSrc: 'https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg',
      username: '@qodkfj84',
      statistics: 95,
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Brown',
      age: 31,
      photoSrc:
        'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      username: '@kkvkkxc737',
      statistics: 56,
    },
    {
      id: 3,
      firstName: 'Layla',
      lastName: 'Staff',
      age: 70,
      photoSrc:
        'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      username: '@napuw09',
      statistics: 89,
    },
    {
      id: 4,
      firstName: 'Ryan',
      lastName: 'Bob',
      age: 20,
      photoSrc:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      username: '@japenqi65',
      statistics: 91,
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      photoSrc:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      username: '@ifwiur39',
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
    <ul>{users.map(mapUsers)}</ul>
  )
}

export default UsersList