import axios from "axios";


export const getAllProducts = async () =>{
   let res = await axios({
       method: 'get',
       url: 'http://localhost:5000/products',
       headers: {"content-type" : "application/json" },
       
   })
   .catch((err) => console.log(err))

   return res
}

export const getAProductById = async (id) => {
    let res = await axios({
      method: "get",
      url: `https://localhost:5000/products/${id}`,
      headers: { "content-type": "application/json" },
    })
    .catch((err) => console.log(err));
    return res;
  };



export const createAProduct = async (data) => {
   return await axios.post (`http://localhost:5000/products`,data)
  };

  export const deleteProductById =  async (id) => {
    return await axios.delete(`http://localhost:5000/products/${id}`).then(()=>{})
 
  }
  export const updateProduct = async (data) => {
    return await axios.put(`http://localhost:5000/products/${data.id}`, data)
    .then((res) =>{return res.data}) .catch((err)=> console.log(err))
  }