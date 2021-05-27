import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Card, Container, CardGroup, Row, Col } from "react-bootstrap";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForum = () => {
    const [categories, setCategories] = useState("");

    useEffect(() => {
        axios.get(`${API_URL}categorys`, { headers: authHeader() })
            .then(response => {
                setCategories(response.data.categorys)
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);

    return categories ?
        <>
            <div>
                <h1 className="container-fluid text-center mt-5" style={{ color: '#2A324B' }}>SNUS FORUM</h1>
            </div>
            <Container>
                <CardGroup>
                    <Row className="mb-2">
                        {categories.map((title) => (
                            <Col className="mb-1" sm="6" md="6" lg="4">
                                <Card className="text-center" style={{ backgroundColor: '#E7BAC0' }}>
                                    <Card.Title style={{ marginTop: '10px', textTransform: 'uppercase' }}>
                                        <Card.Link style={{ color: '#2A324B' }} href={`/snus-forum/${title.id}`}>{title.category}</Card.Link>
                                    </Card.Title>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </CardGroup>
            </Container>
        </>
        : null
}

export default SnusForum;