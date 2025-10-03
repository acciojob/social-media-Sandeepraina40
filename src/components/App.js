import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import UserPosts from './UserPosts';
import Notifications from './Notifications';
import ViewPost from './ViewPost';
import '../styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <Link to="/">Posts</Link> |{' '}
          <Link to="/users">Users</Link> |{' '}
          <Link to="/notifications">Notifications</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userId" component={UserPosts} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/posts/:postId" component={ViewPost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
