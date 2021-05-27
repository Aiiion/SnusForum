import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import { Jumbotron, Button, Image } from "react-bootstrap";
import '../App.css';
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      // (error) => {
      //   const _content =
      //     (error.response && error.response.data) ||
      //     error.message ||
      //     error.toString();

      //   setContent(_content);
      // }
      
    );
  }, []);


  return (
    <Jumbotron>
      <h1 className="container-fluid text-center text-dark fw-bold" >Välkommen till Snusmumriken Webbsida!</h1>
      <p className="text-center text-center text-dark">
        En platform för dig som älskar snus. Ta del av andra entusiasters favoriter,snus recept och tips!
  </p>
      <p className="text-center">
        <Button href={"/login"} variant="outline-dark">Logga in!</Button>{' '}
        <Button href={"/register"} variant="outline-dark">Registrera dig!</Button>{' '}
      </p>
    </Jumbotron>
   
  );
};

export default Home;