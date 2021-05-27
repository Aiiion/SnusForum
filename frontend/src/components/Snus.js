import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { getCurrentUser } from "../services/auth.service";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import saveFavourite from "../services/store-favourites";

const Snus = () => {
    const currentUser = getCurrentUser();

    const [snus, setSnus] = useState();
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

    const FooterStyle = { fill: '#8E92A4' };
    const btnStyle = { color: 'white', background: "#2A324B" }

    const updatefav = async () => {
        await saveFavourite(`${snus.flavour_id}`)

    }

    return (
        <>
            <div>
                <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>SNUS</h1>
            </div>

            <Form inline className="m-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2 p-2 w-75" />

                <Button classname="mb-3 mt-3 " variant="#2A324B" style={btnStyle} >Sök snus</Button>

            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        {snus && snus.snuses.map((snus) => (
                            <Col key={snus.id} sm="6" md="4" lg="4" >
                                <Card>
                                    <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                        <Card.Img variant="top" src={snus.img_url} />
                                    </Card.Body>
                                    <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}>{snus.name}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>Styrka: {snus.strength}</ListGroupItem>
                                        <ListGroupItem>Typ: {snus.type}</ListGroupItem>
                                        <ListGroupItem>Smak: {snus.flavour_name}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Footer className=" d-flex justify-content-lg-between">
                                        <Card.Link href={`/favourites/${currentUser.user.id}`}><Button variant="#2A324B" style={btnStyle} onClick={updatefav}><Icon.StarFill style={FooterStyle}></Icon.StarFill></Button> </Card.Link>
                                        <Card.Link href={`/snus-review/${snus.id}`} > <Button variant="#2A324B" style={btnStyle}>
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
    )




}

export default Snus;