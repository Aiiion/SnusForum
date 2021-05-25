import axios from "axios";
import authHeader from "./auth-header";
import Snus from "../components/Snus"
import React, { useState, useEffect } from "react";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";


const GetSnus = () => {

    // const [snus, getSnus] = useState("")

    let allSnus;

    // useEffect(() => {
    //     getAllSnus();
    // }, []);


    // axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses')
    //     .then(response => {
    //         // JSON responses are automatically parsed.
    //         allSnus = response.data
    //         console.log(allSnus)
    //     })

    //     .catch(e => {
    //         this.errors.push(e)
    //     })



}



// return (
//     <Snus snus={snus} />
// )
//     try {
//         const response = await axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses')

//         console.log(response.data);
//         return response.data;
//     } catch (err) {
//         console.error(err);
//     }
// };

// const response = getSnus()
// console.log(response)
// let allSnus;

// axios.get('https://snusare-backend.herokuapp.com/api/auth/snuses')
//     .then(response => {
//         // JSON responses are automatically parsed.
//         allSnus = response.data
//     })

//     .catch(e => {
//         this.errors.push(e)
//     })
// console.log(allSnus)


export default GetSnus;
