import React from "react";
import { getCurrentUser } from "../services/auth.service";
import { Card, Container, CardGroup, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import leaf from "../image/leaf.png";


const Profile = () => {
  const currentUser = getCurrentUser();

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
        <CardGroup >
          <Card className="pt-2  mt-5 p-3 m-1">
            <Card.Body>
              <Card.Title>
                <img src={leaf}
                  width="30"
                  height="30"
                  className="d-inline-block mb-2 mr-2"
                  alt="logo"
                />
                    Dina Favoriter
                  </Card.Title>
              <Card.Text>
                Klicka på länken för att se alla dina Sparade Favoriter
                  </Card.Text>
              <Card.Link href={`/favourites/${currentUser.user.id}`}>Gå till Favoviter</Card.Link>
            </Card.Body>
          </Card>
          {/* <Row>
            <Col sm="6" md="4" lg="4" > */}
          <Card className="pt-2  mt-5 p-3 m-1">
            <Card.Body>
              <Card.Title>
                <img src={leaf}
                  width="30"
                  height="30"
                  className="d-inline-block mb-2 mr-2"
                  alt="logo"
                />
                    Forum Trådar
                  </Card.Title>
              <Card.Text>
                Klicka på länken för att se alla dina startade trådar
                  </Card.Text>
              <Card.Link href="#">Se trådar</Card.Link>
            </Card.Body>
          </Card>
          {/*   </Col>

            <Col sm="6" md="4" lg="4" > */}
          <Card className=" pt-2  mt-5 p-3 m-1">
            <Card.Body>
              <Card.Title>
                <img src={leaf}
                  width="30"
                  height="30"
                  className="d-inline-block mb-2 mr-2"
                  alt="logo"
                />
                    Recensioner
                  </Card.Title>
              <Card.Text>
                Klicka på länken för att se dina recensioner
                  </Card.Text>
              <Card.Link href="#">Se recensioner</Card.Link>
            </Card.Body>
          </Card>
          {/*   </Col>

            <Col sm="6" md="4" lg="4" > */}
          <Card className=" pt-2 mt-5 p-3 m-1">
            <Card.Body>
              <Card.Title>
                <img src={leaf}
                  width="30"
                  height="30"
                  className="d-inline-block mb-2 mr-2"
                  alt="logo"
                />
                    Kommentarer
                  </Card.Title>
              <Card.Text>
                Klicka på länken för att se dina kommentarer
                  </Card.Text>
              <Card.Link href="#">Se kommentarer</Card.Link>
            </Card.Body>
          </Card>
          {/*    </Col>
            <Col sm="6" md="4" lg="4" > */}

          {/*    </Col>
          </Row> */}
        </CardGroup>
      </Container>
    </>
  );
};

export default Profile;