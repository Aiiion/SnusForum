import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import SnusForumCategory from "./SnusForumCategory";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForum = () => {

    const [categories, setCategories] = useState("");

     useEffect(() => {
        axios.get(`${API_URL}categorys`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                setCategories(response.data.categorys)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);

    console.log(categories);

    return categories ? 
        <>  
            <div>
                <h1 className="container-fluid text-center">SNUS FORUM</h1>
            </div>

            {/* <Form onSubmit={handleReview} inline>
                <FormControl onChange={onChangeReview} type="text" name="review" placeholder="Lägg till review" className="mr-sm-2" />
                <Button className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
            </Form> */}
            
            <Container>
                <CardGroup>
                    <Row>
                        {categories.map((title) => (
                            <Col sm="6" md="4" lg="4">
                                <Card>
                                    <Card.Title style={{ marginTop: '10px'}}>
                                        <Card.Link href={`/snus-forum/${title.id}`}>{title.category}</Card.Link>
                                    </Card.Title>
                                </Card>
                            </Col> 
                            )
                        )}                       
                    </Row>
                </CardGroup>
            </Container>
 
        </>   
        : null 
}

export default SnusForum; 