import axios from 'axios';

export const serverURL = "http://localhost:8000"

const instanceApi = axios.create({
    baseURL: `${serverURL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instanceApi;
