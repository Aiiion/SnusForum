import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const SnusReviews = () => {
    let {id} = useParams();
    console.log(id)

    const [snusData, setSnusData] = useState("");


    useEffect(() => {
        axios.get(`https://snusare-backend.herokuapp.com/api/auth/snuses/${id}`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                setSnusData(response.data)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);

    console.log(snusData);

    return snusData ? 
        <>
            <div>
                <h1 className="container-fluid text-center">SNUS REVIEWS</h1>
            </div>

            <Form inline>
                <FormControl type="text" placeholder="Lägg till en review" className="mr-sm-2" />
                <Button className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                    <Card.Img variant="top" />
                                </Card.Body>
                                <Card.Title>{snusData.snus.name} {snusData.snus.id}</Card.Title>
                                {snusData.reviews.map((review) => (
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Review: {review.reviews.user_id} {review.reviews.body}</ListGroupItem>                                
                                </ListGroup>
                                ))}
                                <Card.Body>
                                    <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4', float: 'left' }}></Icon.StarFill></Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>                        
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null


}

export default SnusReviews;