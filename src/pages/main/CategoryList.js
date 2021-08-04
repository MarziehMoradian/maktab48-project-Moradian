import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts} from '../../redux/actions/productActions';
import Products from '../../components/mainPageComponents/products/Products';
import Sidebar from './Sidbar';
import { Button,  Paper } from '@material-ui/core';

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";




const CategoryList = () => {
    const {category} = useParams();
    
    
    const dispatch = useDispatch();
    const [isOpen,setIsOpen] = useState(false)
    const products = useSelector((state) => state.allProducts.products);
    let listItems=[]
    const handleOpen = () => {
        if(isOpen === false){

            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }
    useEffect(() => {
        dispatch(getProducts()); 
        
    });
    products?.map((product) => {
        if(product.category === category){
          listItems.push(product)
        }
    })
    // const handleSearch = () => {
    //     const i = listItems?.filter((product)=> product.title === search)
        
    // }
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           
            <div style={{width:'100%',height:'70px',backgroundColor:'yellowgreen',marginTop:'80px',display:'flex',flexDirection:'column',alignItems:'start'}}>
                {/* <Menu pageWrapId={ "page-wrap" } width={'20%'}>
                    <main id="page-wrap"> */}
                    <div style={{width:'100%'}}>
                    <Button vatiant="text" onClick={handleOpen} style={{color:'white',fontSize:'18px'}} >{!isOpen? <GiHamburgerMenu style={{color:'white',transitionDuration:'5ms'}}/>: <MdClose style={{color:'white', transition: 'color 8s linear 4s'}}/>}دسته بندی ها</Button>
                      {isOpen && <Paper style={{width: '100%',background:'yellow'}} onClick={()=>setIsOpen(false)}> <Sidebar/></Paper>}
                      {/* <SearchBar
                        onChange={(value) => (setSearch(value))}
                        
                        onRequestSearch={handleSearch}
                        style={{
                            marginTop: '-40.5px',
                            marginRight: '40%',
                            maxWidth: 800,
                            // width: '500px',
                            height:'40px',
                            position:'absolute'
                            
                            
                        }}
                        /> */}
                </div>
            
            <main  style={{width:'100%',height:'100%'}}>
            <Products products={listItems} categoryName={category} num={listItems.length}/>
            </main></div>
        </div>
    )
}

export default CategoryList
