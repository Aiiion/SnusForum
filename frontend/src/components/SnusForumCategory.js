import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";
import SnusForumService from "../services/snus-forum.service"
import { Button, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import moment from 'moment';
import addPost from "../services/snus-forum.service";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForumCategory = (props) => {

    let {id} = useParams();
    
    const form = useRef();
    const checkBtn = useRef();

    const [posts, setPosts] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


     useEffect(() => {
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                const arr = Object.values(response.data)
                setPosts(arr);
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);
     
    console.log(posts);
    const postData = [posts[0]];

    const onChangeTitle = (e) => {
        const title = e.target.value;
        console.log(title);
        setTitle(title);
    }

    const onChangeBody = (e) => {
        const body = e.target.value;
        console.log(body);
        setBody(body);
    }

    const handlePost = (e) => {
        e.preventDefault();
        addPost(title, body, id);

    }    


    return posts ? 
        <>
            <div>
                <h1 className="container-fluid text-center text-uppercase">{posts[1].category}</h1>
            </div>
            
            <Form onSubmit={handlePost} ref={form}>
                <Input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={onChangeTitle}
                  placeholder="Title på tråd"
                />
                <Input
                  type="text"
                  className="form-control"
                  name="body"
                  value={body}
                  onChange={onChangeBody}
                  placeholder="Body på tråd"
                />
                <div className="form-group">
                    <Button onClick={handlePost} className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
                </div>
                {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
            </Form>  
            <Container>
                {postData.map((post) => (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <h5 className="text-uppercase">{post.body}</h5>
                            <p>Startad av: {post.username} - {moment(post.created_at).format("YYYY-MM-DD")}</p>
                        </ListGroupItem>
                    </ListGroup>
                ))}
            </Container>
        </>
    : null
}

export default SnusForumCategory;