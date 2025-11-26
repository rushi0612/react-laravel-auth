import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    // Add this line for Axios versions >= 1.6.2
    withXSRFToken: true,
    headers: {
        "Accept": "application/json",
    }
});
