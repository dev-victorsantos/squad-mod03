import axios from "axios";

const pub = axios.create({
    baseURL: "https://projeto-individual-3.onrender.com",
    headers: {
        "content-type": "application/json",
    },
});

export default pub;