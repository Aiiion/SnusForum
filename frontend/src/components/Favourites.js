import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";
import RenderSnus from "./RenderSnus";



const Favourites = () => {
    const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";
    const [myFav, setmyFav] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios.get(`${API_URL}favourites/${id}`, { headers: authHeader() })
            .then(response => {
                setmyFav(response.data)
            })

    }, [id]);

    console.log(myFav)


    return (
        <>
            <div>
                <h1 className="container-fluid text-center" style={{ color: '#2A324B' }}>Dina Favorit Snusar</h1>
            </div>
            <Container>
                <Row>
                    {myFav ? myFav.favourites.map((snuses) => (RenderSnus(snuses))) : <div> LOADING SNUSES</div>}
                </Row>
            </Container>

        </>
    )





}

export default Favourites;