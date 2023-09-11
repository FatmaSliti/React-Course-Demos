import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);


  const addUserHandler = (userName, userAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {id:Math.random().toString() ,name: userName, age: userAge}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users = {userList} />
    </div>
  );
}

export default App;
