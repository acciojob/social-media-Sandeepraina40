import React from 'react';
import { Link } from 'react-router-dom';

const users = ['Alice', 'Bob', 'Charlie'];

const Users = () => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>
            <Link to={`/users/${u}`}>{u}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
