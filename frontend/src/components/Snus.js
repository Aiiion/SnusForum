import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import AuthService from "../services/auth.service";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Snus = () => {
    const currentUser = AuthService.getCurrentUser();

    const [snus, setSnus] = useState("");

    useEffect(() => {
        axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses', { headers: authHeader() })
            .then(response => {
                setSnus(response.data)
            })
        // .catch(e => {
        //     console.log("Error");
        // })
    }, []);

    console.log(snus)

    const FooterStyle = { fill: '#8E92A4' }

    return snus ?
        <>
            <div>
                <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>SNUS</h1>
            </div>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2 w-75" />
                <Button className="mt-3 mb-3" style={{ backgroundColor: '#2A324B' }}>Sök snus</Button>
            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        {snus.snuses.map((snus) => (
                            <Col key={snus.id} sm="6" md="4" lg="4" >
                                <Card>
                                    <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                        <Card.Img variant="top" src={snus.img_url} />
                                    </Card.Body>
                                    <Card.Title style={{ marginTop: '10px' }}>{snus.name}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Styrka: {snus.strength}</ListGroupItem>
                                        <ListGroupItem>Typ: {snus.type}</ListGroupItem>
                                        <ListGroupItem>Smak: {snus.flavour_id}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Footer className=" d-flex justify-content-lg-between">
                                        <Card.Link href={`/favourites/${currentUser.user.id}`} className="w-50"><Button><Icon.StarFill style={FooterStyle}></Icon.StarFill></Button> </Card.Link>
                                        <Card.Link href={`/snus-review/${snus.id}`} > <Button>
                                            <Icon.ChatLeftTextFill style={FooterStyle}></Icon.ChatLeftTextFill> </Button>
                                        </Card.Link>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null




}

export default Snus;