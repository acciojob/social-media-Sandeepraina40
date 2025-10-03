import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ posts, setPosts, users }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState(users[0]);
  const [content, setContent] = useState('');

  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title,
      author,
      content,
      reactions: [0, 0, 0, 0, 0],
    };
    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
    setAuthor(users[0]);
  };

  const addReaction = (postId, index) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newReactions = [...post.reactions];
        if (index < 4) newReactions[index] += 1; // first 4 buttons increment
        return { ...post, reactions: newReactions };
      }
      return post;
    }));
  };

  return (
    <div>
      <section className="create-post">
        <h2>Create Post</h2>
        <form onSubmit={addPost}>
          <input
            id="postTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
            {users.map(u => <option key={u}>{u}</option>)}
          </select>
          <textarea
            id="postContent"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <div>
              {post.reactions.map((count, idx) => (
                <button key={idx} onClick={() => addReaction(post.id, idx)}>
                  {count}
                </button>
              ))}
            </div>
            <Link className="button" to={`/posts/${post.id}`}>Edit</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
