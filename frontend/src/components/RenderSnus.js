import React from 'react'

import { Card, ListGroup, ListGroupItem, Button, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import saveFavourite from "../services/store-favourites";

export default function RenderSnus(obj) {

    const { id, img_url, name, strength, type, flavour_name, flavours_id } = obj
    const FooterStyle = { fill: '#8E92A4' };
    const btnStyle = { color: 'white', background: "#2A324B" }

    const updatefav = () => {
        saveFavourite(flavours_id)
    }

    return (
        <Col key={id} sm="6" md="4" lg="4" >
            <Card>
                <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                    <Card.Img variant="top" src={img_url} />
                </Card.Body>
                <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}>{name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Styrka: {strength}</ListGroupItem>
                    <ListGroupItem>Typ: {type}</ListGroupItem>
                    <ListGroupItem>Smak: {flavour_name}</ListGroupItem>
                </ListGroup>
                <Card.Footer className=" d-flex justify-content-lg-between">

                    <Card.Link href={`#`}><Button variant="#2A324B" style={btnStyle} onClick={updatefav}><Icon.StarFill style={FooterStyle}></Icon.StarFill></Button> </Card.Link>
                    <Card.Link href={`/snus-review/${id}`} > <Button variant="#2A324B" style={btnStyle}>
                        <Icon.ChatLeftTextFill style={FooterStyle}></Icon.ChatLeftTextFill> </Button>
                    </Card.Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}