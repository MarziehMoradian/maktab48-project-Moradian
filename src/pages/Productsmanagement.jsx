import React,{useEffect, useState} from 'react';
import Dialog from '../components/Dialog';
import TableComponent from '../components/TableComponent';
import { useDispatch, useSelector } from "react-redux";
import {  getAProduct  } from '../redux/actions/productActions';
function ProductTable() {
 
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const handleEdit = (id) => {
      dispatch(getAProduct(id));
  
    }

    return (
        
            <>
                <Dialog />
                <TableComponent onEdit={handleEdit}/>
            </>
        
    )
}

export default ProductTable
