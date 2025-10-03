import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const PostDetails = ({ posts, setPosts }) => {
  const { id } = useParams();
  const history = useHistory();
  const post = posts.find(p => p.id === parseInt(id));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const savePost = () => {
    setPosts(posts.map(p => p.id === post.id ? { ...p, title, content } : p));
    history.push('/');
  };

  return (
    <div className="post">
      <h2>Edit Post</h2>
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={savePost}>Save</button>
    </div>
  );
};

export default PostDetails;
