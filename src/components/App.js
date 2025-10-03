import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Notifications from './Notifications';
import PostDetails from './PostDetails';
import '../styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Welcome to GenZ',
      author: 'Alice',
      content: 'Hello world! This is my first post.',
      reactions: [0, 0, 0, 0, 0],
    },
  ]);

  const [users] = useState(['Alice', 'Bob', 'Charlie']);
  const [notifications, setNotifications] = useState([]);

  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <a href="/">Posts</a> | <a href="/users">Users</a> | <a href="/notifications">Notifications</a>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home posts={posts} setPosts={setPosts} users={users} />
          </Route>

          <Route exact path="/posts/:id">
            <PostDetails posts={posts} setPosts={setPosts} />
          </Route>

          <Route exact path="/users">
            <Users posts={posts} users={users} />
          </Route>

          <Route exact path="/notifications">
            <Notifications notifications={notifications} setNotifications={setNotifications} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
