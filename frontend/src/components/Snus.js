import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import SnusService from "../services/snus.service";
import SnusReview from "./SnusReviews";
import zyn from "../image/zyn-snus.png";

import UserService from "../services/user.service";
import axios from "axios";

const Snus = () => {

    const [snus, setSnus] = useState("");

    useEffect(() => {
        axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses')
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
            < div >
                <h1 className="container-fluid text-center">SNUS</h1>
            </div >

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="mt-3 mb-3" variant="outline-success">Sök snus</Button>
            </Form>
            <Container>
                <CardGroup>
                    <Card className="m-3">
                        <Card.Title>{snus.snuses[0].name}</Card.Title>
                        <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                            <Card.Img variant="top" src={zyn} />
                        </Card.Body>
                        <Card.Text>
                            Smak av persika med inslag av fruktte och grön druva. En liten tunn nikotinpåse som är torr men som när den fuktats upp under läppen ger en snabb och kraftig smakleverans.
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Styrka: {snus.snuses[0].strength}</ListGroupItem>
                            <ListGroupItem>Typ: {snus.snuses[0].type}</ListGroupItem>
                            <ListGroupItem>Format: Mini</ListGroupItem>
                            <ListGroupItem>Smak: Frukt & Bär</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4' }}></Icon.StarFill></Card.Link>
                            <Card.Link href="/snus-review"><Icon.ChatLeftTextFill style={{ fill: '#8E92A4' }}></Icon.ChatLeftTextFill></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="m-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                            <Card.Img variant="top" src={zyn} />
                        </Card.Body>
                        <Card.Text>
                            Smak av persika med inslag av fruktte och grön druva. En liten tunn nikotinpåse som är torr men som när den fuktats upp under läppen ger en snabb och kraftig smakleverans.
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Styrka: Normal</ListGroupItem>
                            <ListGroupItem>Typ: Nikotinpåsar</ListGroupItem>
                            <ListGroupItem>Format: Mini</ListGroupItem>
                            <ListGroupItem>Smak: Frukt & Bär</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4' }}></Icon.StarFill></Card.Link>
                            <Card.Link href="/snus-review"><Icon.ChatLeftTextFill style={{ fill: '#8E92A4' }}></Icon.ChatLeftTextFill></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="m-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                            <Card.Img variant="top" src={zyn} />
                        </Card.Body>
                        <Card.Text>
                            Smak av persika med inslag av fruktte och grön druva. En liten tunn nikotinpåse som är torr men som när den fuktats upp under läppen ger en snabb och kraftig smakleverans.
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Styrka: Normal</ListGroupItem>
                            <ListGroupItem>Typ: Nikotinpåsar</ListGroupItem>
                            <ListGroupItem>Format: Mini</ListGroupItem>
                            <ListGroupItem>Smak: Frukt & Bär</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4' }}></Icon.StarFill></Card.Link>
                            <Card.Link href="/snus-review"><Icon.ChatLeftTextFill style={{ fill: '#8E92A4' }}></Icon.ChatLeftTextFill></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="m-3">
                        <Card.Title>Card Title</Card.Title>
                        <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                            <Card.Img variant="top" src={zyn} />
                        </Card.Body>
                        <Card.Text>
                            Smak av persika med inslag av fruktte och grön druva. En liten tunn nikotinpåse som är torr men som när den fuktats upp under läppen ger en snabb och kraftig smakleverans.
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Styrka: Normal</ListGroupItem>
                            <ListGroupItem>Typ: Nikotinpåsar</ListGroupItem>
                            <ListGroupItem>Format: Mini</ListGroupItem>
                            <ListGroupItem>Smak: Frukt & Bär</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4' }}></Icon.StarFill></Card.Link>
                            <Card.Link href="/snus-review"><Icon.ChatLeftTextFill style={{ fill: '#8E92A4' }}></Icon.ChatLeftTextFill></Card.Link>
                        </Card.Body>
                    </Card>

                </CardGroup>
            </Container>


            <div>
                <Switch>
                    <Route exact path={["/snus-review"]} component={SnusReview} />
                </Switch>
            </div>

        </>

        : null

}

export default Snus;