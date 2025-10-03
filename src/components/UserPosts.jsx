import React from 'react';
import { useParams } from 'react-router-dom';
import Home from './Home';

const UserPosts = () => {
  const { userId } = useParams();

  // Reuse posts from Home component (you can move to context or state management)
  const allPosts = [
    { id: 1, author: 'Alice', content: 'Hello World!', reactions: [0,0,0,0,0] },
    { id: 2, author: 'Bob', content: 'React is fun!', reactions: [0,0,0,0,0] },
    { id: 3, author: 'Charlie', content: 'My first post', reactions: [0,0,0,0,0] },
  ];

  const userPosts = allPosts.filter(p => p.author === userId);

  return (
    <div>
      <h2>{userId}'s Posts</h2>
      <div className="posts-list">
        {userPosts.map(p => (
          <div key={p.id} className="post">
            <p><strong>{p.author}</strong>: {p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
