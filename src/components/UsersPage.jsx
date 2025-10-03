import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementina DuBuque" }
];

const UsersPage = () => {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          <Link data-cy={`user-${u.id}`} to={`/users/${u.id}/posts`}>{u.name}</Link>
        </li>
      ))}
    </ul>
  )
};

export default UsersPage;
