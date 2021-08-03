import React,{useState,useEffect} from 'react'
import Products from '../../components/mainPageComponents/products/Products'
import { getProducts,SearchAproduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from "react-redux";
import Search from './Search';
import { List, ListItem } from '@material-ui/core';
import {Link} from 'react-router-dom'


   
const PageSearch = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const searchAProduct = useSelector((state) => state.allProducts.searchProduct);
    const [search,setSearch] = useState();
    const [display,setDisplay] = useState(false);
    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);
    const handleSearch=(search)=>{
        if(search!==""){
          
          setSearch(search);
          setDisplay(true);
        }else{
        //   setDisplayCount(false)
          setSearch(search);
          setDisplay(false)
        }
      }
    let filterCountry=products.filter(user=>user.title.toLocaleLowerCase().startsWith(search));
    return (
        <div>
              
         
         {display && <List className="list">
            {filterCountry.map(user=>
                
                <Link to={`/product/${user.id}`} style={{textDecorationLine:'none',color:'#000'}}>
                <ListItem key={user.id} onClick={(e)=>setSearch(e.target.innerText)}>{user.title}</ListItem>
                </Link>
            )}
            </List>
            }
          
        
        </div>
    )
}

export default PageSearch
