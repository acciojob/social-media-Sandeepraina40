import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialPosts = [
  { id: 1, author: 'Alice', content: 'Hello World!', reactions: [0,0,0,0,0] },
  { id: 2, author: 'Bob', content: 'React is fun!', reactions: [0,0,0,0,0] },
];

const authors = ['Alice', 'Bob', 'Charlie'];

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [author, setAuthor] = useState(authors[0]);
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      author,
      content,
      reactions: [0,0,0,0,0],
    };
    setPosts([newPost, ...posts]);
    setContent('');
  };

  const handleReact = (postId, index) => {
    setPosts(posts.map(p => {
      if(p.id === postId){
        const newReactions = [...p.reactions];
        if(index < 4) newReactions[index] += 1; // Only first 4 react buttons increase
        return { ...p, reactions: newReactions };
      }
      return p;
    }));
  };

  return (
    <div>
      <section>
        <h2>Create Post</h2>
        <select id="postAuthor" value={author} onChange={e => setAuthor(e.target.value)}>
          {authors.map(a => <option key={a}>{a}</option>)}
        </select>
        <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
        <button className="button" onClick={handleAddPost}>Add Post</button>
      </section>

      <section className="posts-list">
        {posts.map(p => (
          <div key={p.id} className="post">
            <p><strong>{p.author}</strong>: {p.content}</p>
            <div>
              {p.reactions.map((r, idx) => (
                <button key={idx} onClick={() => handleReact(p.id, idx)}>
                  {r} {idx === 0 && '👍'}
                  {idx === 1 && '❤️'}
                  {idx === 2 && '😂'}
                  {idx === 3 && '😮'}
                  {idx === 4 && '👎'}
                </button>
              ))}
            </div>
            <Link to={`/posts/${p.id}`} className="button">View Post</Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
