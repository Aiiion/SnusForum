// import React from 'react'
// import moment from 'moment';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

// export default function RenderData(array) {
//     const data = array.map((post) => {
//         const { title, body, id, username, created_at } = post
//         return (
//             <ListGroup className="list-group-flush">
//                 <ListGroupItem>
//                     <Card.Link className="text-uppercase" href={`/snus-post/${id}`} >{title}</Card.Link>
//                     <p>{body}</p>
//                     <p>Startad av: {username} - {moment(created_at).format("YYYY-MM-DD")}</p>
//                 </ListGroupItem>
//             </ListGroup>
//         )
//     })
//     return data;
// }

/* tar emot en parameter(array) mappar över arrayen och returnerar en lista för varje element i arrayen*/
/* denna funtionen borde kunna användas för andra componenter såsom (comments) då det har identisk  tabell som posts */