import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const UseRegister = (credential) => {
    const response = axios
        .post("http://localhost:5000/api/user", credential)
        .then(() => {
            console.log("success creating user");
        });
    return response.status
}

export const UseLogin = (credential) => {
    const [status, setStatus] = useState(0);
    axios
        .post("http://localhost:5000/api/login", credential)
        .then((res) => setStatus(res.status))
        .catch((err) => {
            setStatus(err.response.status);
        });
    return status
}