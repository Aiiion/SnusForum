import React from "react";
import AuthService from "../services/auth.service";
import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col, Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);

  return (

    <>
    <div className="container">
      <header className="jumbotron">
      <Image src="src/imgage/tobac.png"  />
        <h3>
          <strong>Welcome:</strong> {currentUser.user.username} 
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p> */}
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
      {/* <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Post</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">View your Posts</Card.Subtitle>
    <Card.Text>
      When you click on the link you will be able to see your older posts.
    </Card.Text>
    <Card.Link href="#">Show Posts</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Reviews</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">View your Reviews</Card.Subtitle>
    <Card.Text>
    When you click on the link you will be able to see your older reviews.
    </Card.Text>
    <Card.Link href="#">Show Reviews</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Comments</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">View your Comments</Card.Subtitle>
    <Card.Text>
      SWhen you click on the link you will be able to see your older comments.
    </Card.Text>
    <Card.Link href="#">Show Comments</Card.Link>
  </Card.Body>
</Card>
</CardGroup>
    </>
  
  );
};

export default Profile;