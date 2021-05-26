import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import { Jumbotron, Button, Image } from "react-bootstrap";

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
    <Jumbotron style={{ backgroundColor: '#f2f3f8'}}>
      <Image src="https://www.lovethegarden.com/sites/default/files/styles/header_image_xl/public/content/articles/UK_advice-gardening-grow-your-own-how-grow-your-own-tobacco_header.jpg?itok=tj4g_4OD" fluid />
      <h1 className="container-fluid text-center" >Welcome to Snusmumriken Website!</h1>
      <p className="text-center">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
  </p>
      <p className="text-center">
        <Button href={"/login"} variant="outline-primary">Sign in!</Button>{' '}
        <Button href={"/register"} variant="outline-primary">Sign up!</Button>{' '}
      </p>
    </Jumbotron>
  );
};

export default Home;