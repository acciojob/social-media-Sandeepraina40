import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage";
import UsersPage from "./UsersPage";
import UserPosts from "./UserPosts"; // IMPORT MISSING
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav className="tabs">
          <Link to="/">Posts</Link>
          <Link to="/users">Users</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/users/:userId/posts" component={UserPosts} />
          <Route path="/users" component={UsersPage} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/posts/:postId" component={PostDetails} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
