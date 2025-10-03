import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const allPosts = [
  { id: 1, author: 'Alice', content: 'Hello World!' },
  { id: 2, author: 'Bob', content: 'React is fun!' },
  { id: 3, author: 'Charlie', content: 'My first post' },
];

const ViewPost = () => {
  const { postId } = useParams();
  const history = useHistory();
  const post = allPosts.find(p => p.id === parseInt(postId));

  const [title, setTitle] = useState(post.author);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    post.author = title;
    post.content = content;
    history.push('/');
  };

  return (
    <div className="post">
      <h2>View/Edit Post</h2>
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button className="button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default ViewPost;
