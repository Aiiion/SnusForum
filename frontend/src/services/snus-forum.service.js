import axios from "axios";

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
}


export default addPost;