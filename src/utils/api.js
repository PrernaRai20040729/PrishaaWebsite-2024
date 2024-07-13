import axios from "axios";

// Correcting the params object to ensure proper authorization header format
const params = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_DEV_URL}${url}`, params);
        return data;
    } catch (error) {
        console.log('Error:', error.response ? error.response.data : error.message);
        return error;
    }
};
