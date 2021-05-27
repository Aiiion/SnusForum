import React from "react";
import AuthService from "../services/auth.service";
import { Card, Container, CardGroup, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser);

  return (
    <>
      <Container>
        <h3>
          <strong>Välkommen</strong> {currentUser.user.username} 
        </h3>
        <p>
          <strong>Email:</strong> {currentUser.user.email}
        </p>
      </Container>
      <Container>
        <CardGroup>
          <Row>
            <Col sm="6" md="4" lg="4" >
              <Card>
                <Card.Body>
                  <Card.Title>Forum Trådar</Card.Title>
                  <Card.Text>
                    Klicka på länken för att se alla dina startade trådar
                  </Card.Text>
                  <Card.Link href="#">Se trådar</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          
            <Col sm="6" md="4" lg="4" >
              <Card >
                <Card.Body>
                  <Card.Title>Recensioner</Card.Title>
                  <Card.Text>
                  Klicka på länken för att se dina recensioner
                  </Card.Text>
                  <Card.Link href="#">Se recensioner</Card.Link>
                </Card.Body>
              </Card>
            </Col>
       
            <Col sm="6" md="4" lg="4" >     
              <Card >
                <Card.Body>
                  <Card.Title>Kommentarer</Card.Title>
                  <Card.Text>
                    Klicka på länken för att se dina kommentarer
                  </Card.Text>
                  <Card.Link href="#">Se kommentarer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
    </>
  );
};

export default Profile;