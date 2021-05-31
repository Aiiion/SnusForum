import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../services/auth.service";
import axios from "axios";
import moment from 'moment';


import { Card, Container, CardGroup, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import leaf from "../image/leaf.png";
import authHeader from "../services/auth-header";
import { data } from "jquery";


const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const Profile = () => {
  const currentUser = getCurrentUser();
  console.log(currentUser)
  const userId = currentUser.user.id;

  // console.log(id)


  const [getPosts, setGetPosts] = useState()
  const [getUserId, setGetUserId] = useState()
  const [getReviews, setGetReviews] = useState()
  const [getComments, setGetComments] = useState()


  const getPostsData = () => {
    axios.get(`${API_URL}posts`, { headers: authHeader() })
      .then(response => {
        const data = response.data;
        setGetPosts(data);
      })
  }

  const getReviewsData = () => {
    axios.get(`${API_URL}reviews`, { headers: authHeader() })
      .then(response => {
        // console.log(response)
        const data = response.data;
        setGetReviews(data);
      })
  }

  const getCommentsData = () => {
    axios.get(`${API_URL}comments`, { headers: authHeader() })
      .then(response => {
        console.log(response)
        const data = response.data;
        setGetComments(data);
      })
  }


  const renderData = (array) => {
    const data = array.posts.map(id => {
      // console.log(id.users_id)
      // console.log(userId)
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina forumtrådar</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}> {moment(id.created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }


  const renderReviewsData = (array) => {
    const data = array.reviews.map(id => {
      // console.log(id.users_id)
      // console.log(userId)
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina recensioner</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }

  const renderCommentsData = (array) => {
    const data = array.comments.map(id => {
      // console.log(id.users_id)
      // console.log(userId)
      if (id.users_id === userId) {
        return (
          <Card key={id} style={{ backgroundColor: '#F2F3F8' }}>
            <Card.Title>Dina kommentarer</Card.Title>
            <Card.Body>
              <p>{id.body}</p>
              {/* <p style={{ fontStyle: 'italic' }}>{username} - {moment(created_at).format("YYYY-MM-DD")}</p> */}
            </Card.Body>
          </Card>
        )
      }
    })
    return data;
  }
  // return setGetUserId(data);

  // setGetUserId(data);


  // console.log(getPosts)

  const submitHandlerPosts = (e) => {
    e.preventDefault();
    getPostsData()
  }

  const submitHandlerReviews = (e) => {
    e.preventDefault();
    getReviewsData()
  }

  const submitHandlerComments = (e) => {
    e.preventDefault();
    getCommentsData()
  }

  return (
    <>

      <Container>
        <h2 style={{
          color: '##2A324B'
        }}>
          <strong>Välkommen</strong> {currentUser.user.username}
        </h2>
        <h5 style={{
          color: '##2A324B'
        }}>
          <strong>Email:</strong> {currentUser.user.email}
        </h5>
      </Container>
      <Container>
        <CardGroup>
          <Row>
            <Col sm={6} md={6} lg={4} >
              <Card style={{ backgroundColor: '#F4DA9D' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: '##2A324B'
                  }}>
                    <img src={leaf}
                      width="30"
                      height="30"
                      className="d-inline-block mb-2 mr-2"
                    />
                    Forumtrådar
                  </Card.Title>
                  <Card.Text style={{
                    color: '##2A324B'
                  }}>
                    Klicka på länken för att se alla dina startade trådar
                  </Card.Text>
                  <Button className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerPosts}>Se trådar</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={4}  >
              <Card style={{ backgroundColor: '#D1E0DD' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: '##2A324B'
                  }}>
                    <img src={leaf}
                      width="30"
                      height="30"
                      className="d-inline-block mb-2 mr-2"
                    />
                    Recensioner
                  </Card.Title>
                  <Card.Text style={{
                    color: '##2A324B'
                  }}>
                    Klicka på länken för att se dina recensioner
                  </Card.Text>
                  <Button className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerReviews}>Se recensioner</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={4} >
              <Card style={{ backgroundColor: '#E7BAC0' }}>
                <Card.Body>
                  <Card.Title style={{
                    color: '##2A324B'
                  }}>
                    <img src={leaf}
                      width="30"
                      height="30"
                      className="d-inline-block mb-2 mr-2"
                    />
                    Kommentarer
                  </Card.Title>
                  <Card.Text style={{
                    color: '##2A324B'
                  }}>
                    Klicka på länken för att se dina kommentarer
                  </Card.Text>
                  <Button className="mt-3 mb-3" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={submitHandlerComments}>Se kommentarer</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardGroup>
      </Container>
      <Container>
        {getPosts ? renderData(getPosts) :
          <div>
            {/* <h1>Hej</h1> */}
          </div>
        }
      </Container>

      <Container>
        {getReviews ? renderReviewsData(getReviews) :
          <div>
            {/* <h1>Hej</h1> */}
          </div>
        }
      </Container>

      <Container>
        {getComments ? renderCommentsData(getComments) :
          <div>
            {/* <h1>Hej</h1> */}
          </div>
        }
      </Container>
    </>
  );
};

export default Profile;