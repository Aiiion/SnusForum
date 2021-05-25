import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";
import SnusForumService from "../services/snus-forum.service"
import { Button, Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
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

    // const [posts, setPosts] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const [posts, setPosts] = useState({});
    // const [request, setRequest] = useState({ title: "", body: "" });
    // const { title, body } = request;

    //  useEffect(() => {
    //     axios.get(`${API_URL}categorys/${id}`, { headers: authHeader() })
    //         .then(response => {
    //             // JSON responses are automatically parsed.
    //             // const arr = Object.values(response.data)
    //             const data = response.data.posts
    //             console.log(data);
                
    //             // setPosts(posts=>[...post, data])
    //             // setPosts(data);
    //             console.log(posts);
    //             // setPosts(response.data)
    //         })
    //         .catch(e => {
    //             this.errors.push(e)
    //         })
    // }, []);
     
    const onChangeTitle = (e) => {
        e.preventDefault();
        const title = e.target.value;
        // console.log(title);
        setTitle(title);
    }

    const onChangeBody = (e) => {
        e.preventDefault();
        const body = e.target.value;
        // console.log(body);
        setBody(body);
    }

    const updatePost = (e) => {
        e.preventDefault();
        const obj = {title: title, body: body}
        const post = [...post=> obj];
        setPosts(post);
        console.log(post);
    }
    console.log(posts)
    
    // const onChangeTitle = (e) => {
    //     const title = e.target.value;
    //     console.log(title);
    //     setRequest({ title: title });
    // }

    // const onChangeBody = (e) => {
    //     const body = e.target.value;
    //     console.log(body);
    //     setRequest({ body: body });
    // }

    // if (!posts) return
    //     const [post, category, msg] = posts  // destruturing av posts 
    //     const updatePost = () => {
    //     //spara i post 
    //         setPosts([...post, response.data])
    // }

    // const handlePost = (request) => {
    //     addPost(title, body, id);
        
    //     // axios.post(posts), [updatePost] 
    //     /*en callback som updaterar post varge gång vi hämtar data*/

    //     // e.preventDefault();   
    // }
    

    return posts ? 
        <>
            {/* <div>
                {posts}
            </div> */}

            <Form onSubmit={updatePost} ref={form}>
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
                    <Button type="submit" className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
                </div>
            </Form> 
            {/* <div>
                <h1 className="container-fluid text-center text-uppercase">{posts.category.category}</h1>
            </div> */}
            
            {/* <Form onSubmit={handlePost} ref={form}>
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
            </Form>  */}
            
            {/* <Container>
                {posts.posts.map((post) => (
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link className="text-uppercase" href={`/snus-post/${post.id}`}>{post.title}</Card.Link>
                            <p>Startad av: {post.username} - {moment(post.created_at).format("YYYY-MM-DD")}</p>
                        </ListGroupItem>
                    </ListGroup>
                ))}
            </Container> */}
        </>
    : null
}

export default SnusForumCategory;