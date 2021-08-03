import axios from 'axios';

export const createOrder = async (orders) => {
    await axios.post(`http://localhost:5000/orders`,orders)
}

export const getAllOrders = async () =>{
    let res = await axios({
        method: 'get',
        url: 'http://localhost:5000/orders',
        headers: {"content-type" : "application/json" },
        
    })
    .catch((err) => console.log(err))
 
    return res
}

export const getAOrderById = async (id) => {
    let res = await axios({
      method: "get",
      url: `http://localhost:5000/orders/${id}`,
      headers: { "content-type": "application/json" },
    }).catch((err) => console.log(err));
    return res;
  };
 
  export const getNotDeliveryOrder = async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/orders?condition=false",
        headers:{ "content-type": "application/json" },
    }).catch((err) => console.log(err));
    console.log(res);
    return res;
}

export const getDeliveryOrder= async ()=>{
    let res = await axios({
        method: "get",
        url: "http://localhost:5000/orders?condition=true",
        headers:{ "content-type": "application/json" },
    }).catch((err) => console.log(err));
    console.log(res);
    return res;
}

export const deliveredOrder = async (deliveredOrder) =>{
    const res = await axios
    .put(`http://localhost:5000/orders/${deliveredOrder.id}`, deliveredOrder)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}