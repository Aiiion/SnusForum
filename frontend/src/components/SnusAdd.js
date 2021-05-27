import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import authHeader from '../services/auth-header';

const API_URL = "http://localhost:80/api/auth/";

const SnusAdd = () => {

  const req = [
    {
      name: '',
      type: '',
      strength: '',
      flavour_id: ''
    }
  ]

  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [strength, setStrength] = useState('');
  const [flavour, setFlavour] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios.get(`${API_URL}create-snuses`, { headers: authHeader() })
      .then(response => {
        setType(response.data.types);
        setFlavour(response.data.flavours);

      })
  },[])

  console.log(flavour);


  const onChangeBrand = (e) => {
    e.preventDefault();
    const brand = e.target.value;
    setBrand(brand);
  };

  const onChangeType = (e) => {
    e.preventDefault();
    const type = e.target.value;
    setType(type);
  };

  const onChangeStrenght = (e) => {
    e.preventDefault();
    const strength = e.target.value;
    setStrength(strength);
  };

  const onChangeFlavour = (e) => {
    e.preventDefault();
    const flavour = e.target.value;
    setFlavour(flavour);
  };

  const HandleSubmit = (e) => {
    // alert('Ditt snus har lagts till!');

    useEffect(() => {
      axios.post(`${API_URL}store-snuses`, { headers: authHeader() })
        .then(response => {
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
        })
    }, []);

  }




  return type && flavour ?

    <div>
      <h1>Lägg till snus i databasen!</h1>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={HandleSubmit}>
        <Form.Group>
          <Form.Label>Märke</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={brand}
            onChange={onChangeBrand}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Typ</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={type}
            onChange={onChangeType}
          >
            {type.map((type) => (
              <option>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Styrka</Form.Label>
          <Form.Control
            as="select"
            name="strenght"
            value={strength}
            onChange={onChangeStrenght}
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
            as="select"
            name="flavour"
            value={flavour}
            onChange={onChangeFlavour}
          >
            {flavour.map((flavour) => (
              <option>{flavour.flavour_type}</option>
            ))}
          </Form.Control>
        </Form.Group>

      <Form.Group>
        <Form.File />
      </Form.Group>

        <Button type="submit" value="Submit" variant="#2A324B" style={{ color: 'white', background: "#2A324B" }}>
          Submit
        </Button>
      </Form>
    </div>
  : null
}
export default SnusAdd;
