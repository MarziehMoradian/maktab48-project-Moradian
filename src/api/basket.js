import axios from "axios";

export const addItem = async(product) => {
   return await axios.post(`     
    http://localhost:5000/basket`, {products:[product]})
}

// export const getProductsInBasket = async() => {
//     let res = await axios.get('http://localhost:5000/basket')
//     console.log(res);
//     return res

// }

export const getProductsInBasket = async () =>{
    let res = await axios({
        method: 'get',
        url: 'http://localhost:5000/basket',
        headers: {"content-type" : "application/json" },
        
    })
    .catch((err) => console.log(err))
 
    return res
 }