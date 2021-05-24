import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const addPost = (title, body) => {
    let bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('body', body);
    
    return axios({
        method: "post",
        url: `${API_URL}store-posts`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" }})
        // .then((response) => {
        //     if (response.data.access_token) {
        //         localStorage.setItem("user", JSON.stringify(response.data));
        //     }
        //     return response.data;
        //     });
}


export default addPost;