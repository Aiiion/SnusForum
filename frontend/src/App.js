import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";

import AuthService from "./services/auth.service";

import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Home from "./components/Home";

import SnusForum from "./components/SnusForum";

import News from "./components/News";

import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Snus from "./components/Snus";
import SnusReviews from "./components/SnusReviews";
import SnusForumCategory from "./components/SnusForumCategory";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Navbar.Brand href={"/"}>
          <Logo
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Snus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={"/"} className="navbar-brand">
              u10
              </Nav.Link>

            {showModeratorBoard && (
              <Nav.Link href={"/mod"} className="nav-link">
                Moderator Board
              </Nav.Link>
            )}

            {showAdminBoard && (
              <Nav.Link href={"/admin"} className="nav-link">
                Admin Board
              </Nav.Link>
            )}

            {currentUser && (
              <Nav.Link href={"/user"} className="nav-link">
                User
              </Nav.Link>
            )}

            {currentUser ? (
              <>
                <Nav.Link href={"/profile"} className="nav-link">
                  {currentUser.username}
                </Nav.Link>
                <Nav.Link href={"/news"} className="nav-link">
                  News
                  </Nav.Link>
                <Nav.Link href={"/snus-forum"} className="nav-link">
                  Snus Forum
                  </Nav.Link>
                <Nav.Link href={"/snus"} className="nav-link">
                  Snus
                  </Nav.Link>
                <Nav.Link href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                  </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href={"/login"} className="nav-link">
                  Login
                  </Nav.Link>

                <Nav.Link href={"/register"} className="nav-link">
                  Sign Up
                  </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/snus-forum" component={SnusForum} />
          <Route path="/snus-forum/:id" component={SnusForumCategory}/>
          <Route exact path="/snus" component={Snus} />
          <Route path="/snus-review/:id" component={SnusReviews}/>
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
