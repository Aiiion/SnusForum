import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";
import SnusForumService from "../services/snus-forum.service";
import { Button, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import moment from 'moment';
import addPost from "../services/snus-forum.service";
import RenderData from "../services/RenderData";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/"


const SnusForumCategory = (props) => {
    let { id } = useParams();
    const form = useRef();
    const checkBtn = useRef()


    /* Testa att funtionen funkar i frontend  ( utan en request) */
    const forum = {
        allposts: [],
        message: "There are no post yet, create a new one?"
    }
    const { allposts, message } = forum


    /* Initial värde på request state */
    const req = {
        title: "",
        body: ""
    }




    const [posts, setPosts] = useState([])
    const [request, setRequest] = useState(req)
    const [response, setReponse] = useState()
    const { title, body } = request;

    /* Hämtar data från db och lagra det i posts state */
    useEffect(() => {
        axios.get(`${API_URL}categorys/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.posts
                setReponse(response.data)

                setPosts(data)
            })

    }, []);
    console.log(response)
    /* Funtionen att updatera posts state med nytt data körs vid submit */
    const updatePost = async () => {
        await addPost(title, body, id)
        axios.get(`${API_URL}categorys/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.posts

                setPosts(data)
            })


    }


    const submitHandler = e => {
        e.preventDefault();
        console.log(request);
        updatePost()

    };




    return (
        <>
            <div>
                <h1 className="container-fluid text-center text-uppercase">{response && response.category.category}</h1>
            </div>

            <Form ref={form} onSubmit={submitHandler}>
                {/* vi skulle kunna lägga till validations i formulären så att man inte kan lägga in tomma värden  eller skapa nya titlar som redan finns,
                ni använder " react-validation/build" vet inte riktig vad det är men vi skulle kunna använda https://react-bootstrap.github.io/components/forms/? istället
                eftersom det används redan i resten av projektet.
            */}
                <Input
                    type="text"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, title: e.target.value });
                    }}
                    placeholder="Title på tråd"
                />
                <Input
                    type="text"
                    className="form-control"
                    name="body"
                    value={body}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, body: e.target.value });
                    }}
                    placeholder="Body på tråd"
                />
                <div className="form-group">
                    <Button type="submit" className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
                </div>
            </Form>




            <Container>
                {posts ? RenderData(posts) :
                    <div>
                        <h1> {message} </h1>
                    </div>
                }
            </Container>
        </>

    )
}

export default SnusForumCategory;