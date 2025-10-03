import React from 'react';

const Users = ({ posts, users }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u, idx) => (
          <li key={idx}>
            <h3>{u}</h3>
            <ul>
              {posts.filter(p => p.author === u).map(p => (
                <li key={p.id} className="post">
                  <h4>{p.title}</h4>
                  <p>{p.content}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
