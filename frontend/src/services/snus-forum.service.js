import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const addPost = (title, body, id) => {
    let bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('body', body);
    bodyFormData.append('categorys_id', id);
    
    
    return axios({
        method: "post",
        url: `${API_URL}store-posts`,
        data: bodyFormData,
        headers: { 
            "Content-Type": "multipart/form-data", 
            ...authHeader() 
        }})
            // .then(() => {
            //     window.location.reload();
            // })
            
            // .then(
            //     () => {
            //     history.push("/snus-forum/:id");
            //     window.location.reload();
            // })
 
}

// export const api =
//   axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       ...authHeader()
//     },
//     withCredentials: true,
//     timeout: 100000,
//   });

// api.post('url', formData, {headers: ...})


export default addPost;