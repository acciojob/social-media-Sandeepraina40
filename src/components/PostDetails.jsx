import React, { useState } from "react";
import { useParams } from "react-router-dom";

const initialPosts = [
  { id: 1, title: "Welcome!", content: "Hello world" },
  { id: 2, title: "Second Post", content: "Content for Ervin" },
  { id: 3, title: "Last Post", content: "Content for Clementina" }
];

const PostDetails = () => {
  const { postId } = useParams();
  const [posts, setPosts] = useState(initialPosts);
  const post = posts.find(p => p.id === parseInt(postId));

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const handleSave = () => {
    setPosts(posts.map(p => p.id === post.id ? {...p, title, content} : p));
    setEditMode(false);
  };

  if(!post) return <div>Post not found</div>;

  return (
    <div className="post">
      {editMode ? (
        <>
          <input id="postTitle" value={title} onChange={e=>setTitle(e.target.value)} />
          <textarea id="postContent" value={content} onChange={e=>setContent(e.target.value)} />
          <button className="button" onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="button" onClick={()=>setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  )
};

export default PostDetails;
