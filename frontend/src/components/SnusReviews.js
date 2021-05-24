import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";
import moment from 'moment';

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";


const SnusReviews = () => {
    let {id} = useParams();
    console.log(id)

    const [snusData, setSnusData] = useState("");
    const [review, setReview] = useState("");

  
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

    // FIXA POST REQUESTEN PÅ REVIEWS - START
    const addReview = (title, body, rating) => {
        let bodyFormData = new FormData();
        bodyFormData.append('title', title);
        bodyFormData.append('body', body);
        bodyFormData.append('rating', rating);

        return axios({
            method: "post",
            url: `${API_URL}snus-review/${id}`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" }})
    };

    const onChangeReview = (e) => {
        const review = e.target.value;
        setReview(review);
    }
        
    const handleReview = (e) => {
        e.preventDefault();
        
    }
    // FIXA POST REQUESTEN PÅ REVIEWS - END

    console.log(snusData);

    return snusData ? 
        <>
            <div>
                <h1 className="container-fluid text-center">SNUS REVIEWS</h1>
            </div>

            <Form onSubmit={handleReview} inline>
                <FormControl onChange={onChangeReview} type="text" name="review" placeholder="Lägg till review" className="mr-sm-2" />
                <Button className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
            </Form>

            <Container>
                <CardGroup>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body style={{ backgroundColor: '#F2F3F8' }}>
                                    <Card.Img variant="top" src={snusData.snus.img_url}/>
                                </Card.Body>
                                <Card.Title style={{ marginTop: '10px'}}>{snusData.snus.name} {snusData.snus.id}
                                    <Card.Link href="#"><Icon.StarFill style={{ fill: '#8E92A4', float: 'right' }}></Icon.StarFill></Card.Link>
                                </Card.Title>
                                <ListGroup className="list-group-flush">
                                        <ListGroupItem>Styrka: {snusData.snus.strength}</ListGroupItem>
                                        <ListGroupItem>Typ: {snusData.snus.type}</ListGroupItem>
                                        <ListGroupItem>Smak: {snusData.snus.flavour_id}</ListGroupItem>
                                        <ListGroupItem>Genomsnittligt Betyg: {Math.round(snusData.avgRating)}</ListGroupItem>
                                </ListGroup>
                                <Card.Title style={{ marginTop: '10px'}}>Reviews</Card.Title>
                                {snusData.reviews.map((review) => (
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        {review.username} - {moment(review.created_at).format("YYYY-MM-DD")} 
                                        <p>Betyg: {review.rating}</p>
                                        <p>{review.body}</p>
                                    </ListGroupItem>                                
                                </ListGroup>
                                ))}
                                  
                            </Card>
                        </Col>                        
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null


}

export default SnusReviews;