import React, { useState } from 'react';
import './App.css';



function App() {
  const users = [
    { id: 1, name: 'Alex', age: 35 },
    { id: 2, name: 'Brian', age: 32 },
    { id: 3, name: 'Camille', age: 21 },
    { id: 4, name: 'Christian', age: 28 },
    { id: 5, name: 'Dylan', age: 32 },
    { id: 6, name: 'Eric', age: 26 },
    { id: 7, name: 'Tristan', age: 34 },
    { id: 8, name: 'Fransesco', age: 42 },
    { id: 9, name: 'Ryan', age: 46 },
  ];

  const [name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(users);

  const filterHandler = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = users.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
    }
    setName(keyword);

  }

  


  return (
    <div className="App">
 <input
        type="search"
        value={name}
        onChange={filterHandler}
        className="input"
        placeholder="Filter"
      />

<div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>

    </div>
  );
}

export default App;
