import React from "react";
import AuthService from "../services/auth.service";
import { Card, Container, CardGroup, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import leaf from "../image/leaf.png";


const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <>
      <Container>
        <h2>
          <strong>Välkommen</strong> {currentUser.user.username} 
        </h2>
        <h5>
          <strong>Email:</strong> {currentUser.user.email}
        </h5>
      </Container>
      <Container>
        <CardGroup>
          <Row>
            <Col sm="6" md="4" lg="4" >
              <Card>
                <Card.Body>
                  <Card.Title>
                    <img src={leaf} 
                    width="30"
                    height="30"
                    className="d-inline-block mb-2 mr-2"
                    />
                    Forum Trådar
                  </Card.Title>
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
                  <Card.Title>
                    <img src={leaf} 
                    width="30"
                    height="30"
                    className="d-inline-block mb-2 mr-2"
                    />
                    Recensioner
                  </Card.Title>
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
                  <Card.Title>
                    <img src={leaf} 
                    width="30"
                    height="30"
                    className="d-inline-block mb-2 mr-2"
                    />
                    Kommentarer
                  </Card.Title>
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