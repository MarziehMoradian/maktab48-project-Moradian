import axios from 'axios';

export const createOrder = async (data) => {
    await axios.post(`http://localhost:5000/basket`,data)
}

export const getbaskets = async () => {
    await axios.get('http://localhost:5000/basket')
}