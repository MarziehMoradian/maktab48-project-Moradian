import axios from 'axios';

export const createOrder = async (data,id) => {
    await axios.post(`http://localhost:5000/basket`,data,id)
}

export const getbaskets = async () => {
    await axios.get('http://localhost:5000/basket')
}