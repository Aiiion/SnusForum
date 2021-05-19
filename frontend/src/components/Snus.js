import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import authHeader from "../services/auth-header";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import SnusReviews from "./SnusReviews";

const Snus = ({ match }) => {

    const [snus, setSnus] = useState("");

    useEffect(() => {
        axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses', { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                setSnus(response.data)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);

    console.log(snus)

    return snus ?
        <>
            <div>
                <h1 className="container-fluid text-center">SNUS</h1>
            </div>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="mt-3 mb-3" variant="outline-success">Sök snus</Button>
            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        {snus.snuses.map((snus) => (
                            <Col sm="6" md="4" lg="4" >
                                <Card>

                                    <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                        <Card.Img variant="top" src={snus.img_url} />
                                    </Card.Body>
                                    <Card.Title>{snus.name}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Styrka: {snus.strength}</ListGroupItem>
                                        <ListGroupItem>Typ: {snus.type}</ListGroupItem>
                                        <ListGroupItem>Format: {snus.id}</ListGroupItem>
                                        <ListGroupItem>Smak: {snus.flavour_id}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4', float: 'left' }}></Icon.StarFill></Card.Link>
                                        <Card.Link href={`/snus-review/${snus.id}`}>
                                            <Icon.ChatLeftTextFill style={{ fill: '#8E92A4', float: 'right' }}></Icon.ChatLeftTextFill>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))};
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null
                            
        
                            
  
}

export default Snus;