import React from "react";
import { useParams } from "react-router-dom";

const allPosts = [
  { id: 1, title: "Welcome!", authorId: 1, content: "Hello world" },
  { id: 2, title: "Second Post", authorId: 2, content: "Content for Ervin" },
  { id: 3, title: "Last Post", authorId: 3, content: "Content for Clementina" }
];

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementina DuBuque" }
];

const UserPosts = () => {
  const { userId } = useParams();
  const posts = allPosts.filter(p => p.authorId === parseInt(userId));
  const user = users.find(u => u.id === parseInt(userId));

  return (
    <div>
      <h2>Posts by {user?.name}</h2>
      {posts.map(p => (
        <div key={p.id} className="post">
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  )
};

export default UserPosts;
