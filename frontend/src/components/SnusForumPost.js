import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import { Button, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import addComment from "../services/snus-comments.service";
import moment from 'moment';

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForumPost = () => {

    let { id } = useParams();
    const form = useRef();
    console.log(id);

    const forum = {
        allcomments: [],
        message: "There are no post yet, create a new one?"
    }

    const { allcomments, message } = forum

    /* Initial värde på request state */
    const req = {
        body: ""
    }

    const [comment, setComment] = useState("");
    const [commentBody, setCommentBody] = useState("");
    const [request, setRequest] = useState(req)
    const [response, setResponse] = useState()
    const { body } = request;

    useEffect(() => {
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                const data = response.data.comments
                setResponse(response.data)
                console.log(response);
                setComment(data);
            })
        // .catch(e => {
        //     this.errors.push(e)
        // })
    }, []);

    console.log(response);
    console.log(comment);

    const updateComment = async () => {
        await addComment(body, id)
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                const data = response.data.comments

                setComment(data)
            })
    }
    console.log(comment);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(request);
        updateComment()
    };

    const RenderData = (array) => {
        const data = array.map((comment) => {
            const { body, username, created_at } = comment
            return (
                <Card style={{ backgroundColor: '#F2F3F8' }}>
                    <Card.Body>
                        {/* <Card.Body className="text-uppercase">{body}</Card.Link> */}
                        <p>{body}</p>
                        <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p>
                    </Card.Body>
                </Card>
            )
        })
        return data;
    }

    return comment ?
        <>
            <div>
                <h5 className="container-fluid text-center text-uppercase">{response.post.title}</h5>
            </div>
            <Card style={{ backgroundColor: '#D1E0DD' }}>
                <Card.Body >
                    <p>{response.post.body}</p>
                    <p style={{ fontStyle: 'italic' }}>Startad av: {response.post.username} - {moment(response.post.created_at).format("YYYY-MM-DD")}</p>
                </Card.Body>
            </Card>

            <Form className="mt-3" onSubmit={submitHandler} ref={form}>
                <Input
                    type="text"
                    className="form-control"
                    name="body"
                    value={body}
                    onChange={e => {
                        e.preventDefault()
                        setRequest({ ...request, body: e.target.value });
                    }}
                    placeholder="Svara på inlägg"
                />
                <div className="form-group">
                    <Button type="submit" className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>Lägg till</Button>
                </div>
            </Form>
            <Container>
                {comment ? RenderData(comment) :
                    <div>
                        <h1> {message} </h1>
                    </div>
                }
            </Container>
        </>
        : null
}

export default SnusForumPost;