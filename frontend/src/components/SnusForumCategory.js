import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../services/auth-header";
import { Switch, Route, Link, useParams } from "react-router-dom";

const SnusForumCategory = () => {

    let {id} = useParams();
    console.log(id)

    return (
        <div>
            
        </div>
    )

}

export default SnusForumCategory;