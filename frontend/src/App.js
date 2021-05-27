import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';

import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "./logo.svg";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


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
import SnusForumPost from "./components/SnusForumPost";
import SnusAdd from "./components/SnusAdd";



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
              <Nav.Link href={"/profile"} className="nav-link">
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
                  <Nav.Link href={"/snus-add"} className="nav-link">
                  Add Snus
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
          <Route path="/snus-post/:id" component={SnusForumPost}/>
          <Route exact path="/snus" component={Snus} />
          <Route exact path="/snus-add" component={SnusAdd} />
          <Route path="/snus-review/:id" component={SnusReviews}/>
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
        </Switch>
      </div>

      <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Om oss
            </h5>
              <p>
                Välkommen!
                Med denna webbapplikation vill vi bidra med en plattform och ett forum för alla snusentusiaster runt om i världen - en plats där man kan dela snusrecept, ge tips om sina favoritsnus, diskutera nya snussorter och mycket mer.
            </p>
              <p>
                Registera dig för att gå med i vår gemenskap och utforska vilket snus som passar dig!
            </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">Utforska</h5>
              <ul className="list-unstyled">
                <p>
                  <a href={"/news"}>NYHETER</a>
                </p>
                <p>
                  <a href={"/snus"}>SNUS</a>
                </p>
                <p>
                  <a href={"/snus-forum"}>SNUSFORUM</a>
                </p>
                <p>
                  <a href="#!">SNUSRECENSIONER</a>
                </p>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Kontakt</h5>
              <p>
                <i className="fa fa-envelope mr-3" /> snusmumriken.kondtjanst@gmail.com
            </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 12 123 123 12
            </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Följ oss
            </h5>
              <div className="mt-2 ">
                <a type="button" href="#!" className="btn-floating btn-small btn-fb">
                  <i className="fab fa-facebook-f" />
                </a>
                <a type="button" href="#!" className="btn-floating btn-small btn-tw">
                  <i className="fab fa-twitter" />
                </a>
                <a type="button" href="#!" className="btn-floating btn-small btn-gplus">
                  <i className="fab fa-google-plus" />
                </a>
                <a type="button" href="https://github.com/chas-academy/u10-business-idea-snusmumriken-barn" className="btn-floating btn-small btn-github">
                  <i className="fab fa-github" />
                </a>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <p>Snus</p>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default App;
