import axios from "axios";

const API_URL = "https://snusare-backend.herokuapp.com/api/auth/";

const register = (username, email, password) => {
  var bodyFormData = new FormData();
  bodyFormData.append('username', username);
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);
  bodyFormData.append('password_confirmation', password);
 
    return axios({
      method: "post",
      url: `${API_URL}register`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" }})
};

const login = (email, password) => {
  var bodyFormData = new FormData();
  bodyFormData.append('email', email);
  bodyFormData.append('password', password);
  
  return axios({
    method: "post",
    url: `${API_URL}login`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" }})
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")); 
   
};


export default {
  register,
  login,
  logout,
  getCurrentUser,
};