import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialUsers = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementina DuBuque" }
];

const initialPosts = [
  { id: 1, title: "Welcome!", authorId: 1, content: "Hello world", reactions: [0,0,0,0,0] }
];

const LandingPage = () => {
  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState(users[0].id);
  const [newContent, setNewContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: newTitle,
      authorId: parseInt(newAuthor),
      content: newContent,
      reactions: [0,0,0,0,0]
    };
    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewContent("");
  };

  const handleReaction = (postId, index) => {
    setPosts(posts.map(post => {
      if(post.id === postId && index !== 4){
        const newReactions = [...post.reactions];
        newReactions[index]++;
        return {...post, reactions: newReactions};
      }
      return post;
    }));
  };

  return (
    <div className="landing-page">
      <form className="create-post" onSubmit={handleSubmit}>
        <input id="postTitle" placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} required/>
        <select id="postAuthor" value={newAuthor} onChange={e => setNewAuthor(e.target.value)}>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
        <textarea id="postContent" placeholder="Content" value={newContent} onChange={e => setNewContent(e.target.value)} required/>
        <button className="button" type="submit">Submit</button>
      </form>

      <div className="posts-list">
        {posts.map(post => {
          const author = users.find(u => u.id === post.authorId);
          return (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>Author: {author?.name}</p>
              <p>{post.content}</p>
              <div className="reactions">
                {post.reactions.map((r, i) => <button key={i} onClick={() => handleReaction(post.id, i)}>{r}</button>)}
              </div>
              <Link className="button" to={`/posts/${post.id}`}>View Post</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default LandingPage;
