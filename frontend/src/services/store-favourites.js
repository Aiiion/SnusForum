import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";


export default function saveFavourite(snusID) {
    let bodyFormData = new FormData();
    bodyFormData.append('flavours_id', snusID);



    return axios({
        method: "post",
        url: `${API_URL}store-favourites`,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })
}
