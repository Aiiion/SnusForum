import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const SnusForumPost = () => {

    let {id} = useParams();
    const form = useRef();

    const [comment, setComment] = useState("");
    const [commentBody, setCommentBody] = useState("");

    useEffect(() => {
        axios.get(`${API_URL}posts/${id}`, { headers: authHeader() })
            .then(response => {
                // JSON responses are automatically parsed.
                
                setComment(response.data);
            })
            .catch(e => {
                this.errors.push(e)
            })
    }, []);

    console.log(comment);

    const onChangeComment = (e) => {
        const commentBody = e.target.value;
        console.log(commentBody);
        setCommentBody(commentBody);
    }

    const handleComment = (e) => {
        e.preventDefault();
        // addPost(title, body, id);

    }

    return comment ? 
        <>
            <div>
                <h5 className="container-fluid text-center text-uppercase">{comment.post.title}</h5>
            </div>
            <Card style={{ backgroundColor: '#D1E0DD' }}>
                <Card.Body >
                    {comment.post.body}
                </Card.Body>
            </Card>

            <Form onSubmit={handleComment} ref={form}>
                <Input
                  type="text"
                  className="form-control"
                  name="commentBody"
                  value={commentBody}
                  onChange={onChangeComment}
                  placeholder="Svara på inlägg"
                />
                <div className="form-group">
                    <Button onClick={handleComment} className="mt-3 mb-3" variant="outline-success">Lägg till</Button>
                </div>
            </Form> 
        </>        
    : null

}

export default SnusForumPost;