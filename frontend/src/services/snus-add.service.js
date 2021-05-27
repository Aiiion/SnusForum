import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

export default function addSnus(name, type, strength, flavours_id) {
    let bodyFormData = new FormData();
    bodyFormData.append('name', name);
    bodyFormData.append('type', type);
    bodyFormData.append('strength', strength);
    bodyFormData.append('flavours_id', flavours_id);

    return axios({
        method: "post",
        url: `${API_URL}store-snuses`,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data",
            ...authHeader()
        }
    })
}

