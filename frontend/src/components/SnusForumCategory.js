import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";
import SnusForumService from "../services/snus-forum.service"
import { Button, Container } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForumCategory = (props) => {

    let {id} = useParams();
    console.log(id)

    const form = useRef();
    const checkBtn = useRef();

    const [posts, setPosts] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    const onChangeBody = (e) => {
        const body = e.target.value;
        setBody(body);
    };

    const handlePost = (e) => {
        e.preventDefault();
        SnusForumService.addPost(title, body).then(() => {
            window.location.reload();
        })       
    }

     useEffect(() => {
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                setPosts(response.data)
    
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);
    
    console.log(posts);
    const arr = Object.values(posts);

    console.log(arr)

    return posts ? 
        <>
            <div>
                <h1 className="container-fluid text-center">{posts.categorys.category}</h1>
            </div>
            {/* KOLLA U09 första versionen för formulär exempel */}
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
                    <Button className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>  
            <Container>
                {arr.map((post) => (
                    <div>
                        <p>
                            {post.body} 
                            {post.username}
                        </p>
                    </div>
                ))}
            </Container>
            
        </>
    : null

}

export default SnusForumCategory;