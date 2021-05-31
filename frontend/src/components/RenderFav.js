import React from 'react'
import { ListGroup, ListGroupItem, CloseButton } from "react-bootstrap";
import { HeartFill } from 'react-bootstrap-icons';
import deleteFavourite from '../services/delete-favourite';



export default function RenderFav(obj, notis) {

    const { id, name, } = obj
    const handler = (e) => {
        notis.alert.error('Favorit Bortagen')
        const btnID = e.currentTarget.parentNode
        btnID.remove()
        updateFavs()
        console.log(btnID);
    }
    console.log(obj);
    const updateFavs = async () => {
        await deleteFavourite(id)

    }


    const randomColor = () => {
        const letters = "0123456789ABCDEF"
        let color = "#";
        for (let i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * 5)];
        }
        console.log(color)
        return color;
    }


    return (




        <>
            <ListGroup sm="6" md="4" lg="4" id={id}>

                <ListGroupItem style={{ marginTop: '10px', textTransform: 'uppercase', backgroundColor: `${randomColor()}`, color: 'white' }}> <HeartFill /> {name} <CloseButton onClick={handler} /></ListGroupItem>


            </ListGroup>
        </>




    )

}