import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";

import { Card, ListGroup, ListGroupItem, Form, FormControl, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

const Favourites = () => {
    const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";
    const [favourites, setFavourites] = useState("");
    let { id } = useParams();
    useEffect(() => {
        axios.get(`${API_URL}favourites/${id}`, { headers: authHeader() })
            .then(response => {
                setFavourites(response.data)
            })

    }, [id]);

    console.log(favourites)

    return (

        <div>
            <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>Dina Favorit Snusar</h1>
        </div>
    )





}

export default Favourites;