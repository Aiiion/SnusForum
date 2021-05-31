import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import authHeader from '../services/auth-header';
import Modal from 'react-bootstrap/Modal';
import addSnus from '../services/snus-add.service';

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export default function SnusModal(props) {

    const req = [
        {
            name: '',
            type: '',
            strength: '',
            flavours_id: ''
        }
    ]

    // const [brand, setBrand] = useState('');
    const [snusType, setSnusType] = useState('');
    // const [snusStrength, setSnusStrength] = useState('');
    const [snusFlavour, setSnusFlavour] = useState('');
    const [request, setRequest] = useState(req)
    const [response, setResponse] = useState()
    const [errorMsg, setErrorMsg] = useState('');
    const { name, type, strength, flavours_id } = request;


    useEffect(() => {
        axios.get(`${API_URL}flavours`, { headers: authHeader() })
        .then(response => {
            console.log(response);
            const data = response.data.flavours;
            // setSnusType(response.data.types);
            setSnusFlavour(data);
            // setSnusStrength
        })
    },[])

    console.log(snusFlavour);

    const updateSnus = async () => {
        await addSnus(name, type, strength, flavours_id);
        axios.get(`${API_URL}snuses`, { headers: authHeader() })
            .then(response => {
                const data = response.data
                setRequest(data);
                // setComment(data)
        })
    }
    console.log(request);

    const HandleSubmit = (e) => {
        e.preventDefault();
        updateSnus();
        setRequest(req);
    }


  return (
    <>
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Lägg till snus i databasen!
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Group>
                <Form.Label>Märke</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => { 
                        e.preventDefault()
                        setRequest({ ...request, name: e.target.value });
                    }}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label>Typ</Form.Label>
                <Form.Control
                    // as="select"
                    name="type"
                    value={type}
                    onChange={e => { 
                        e.preventDefault()
                        setRequest({ ...request, type: e.target.value });
                    }}
                >
                    {/* {type.map((type) => (
                    <option>{type}</option>
                    ))} */}
                </Form.Control>
                </Form.Group>

                <Form.Group>
                <Form.Label>Styrka</Form.Label>
                <Form.Control
                    // as="select"
                    name="strenght"
                    value={strength}
                    onChange={e => { 
                        e.preventDefault()
                        setRequest({ ...request, strength: e.target.value });
                    }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>

                <Form.Group>
                <Form.Label>Smak</Form.Label>
                <Form.Control
                    // as="select"
                    name="flavours_id"
                    value={flavours_id}
                    onChange={e => { 
                        e.preventDefault()
                        setRequest({ ...request, flavours_id: e.target.value });
                    }}
                >
                    <option>Tall</option>
                    <option>Gran</option>
                    <option>Mint</option>
                    <option>Bär</option>
                    <option>Frukt</option>
                    <option>Kaffe</option>
                    <option>Choklad</option>
                    <option>Laktris</option>
                    <option>Geranium</option>
                    <option>Bergamott</option>
                    <option>Örter</option>
                    <option>Citrus</option>
                    <option>Rök</option>
                    <option>Cognac</option>
                    {/* {snusFlavour.map((flavour) => (
                    <option>{flavour.flavour_type}</option>
                    ))} */}
                </Form.Control>
                </Form.Group>

            <Form.Group>
                <Form.File />
            </Form.Group>

                <Button type="submit" value="Submit" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>
                Submit
                </Button>
            
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="#2A324B" style={{ color: 'white', background: "#2A324B" }} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
  
}
