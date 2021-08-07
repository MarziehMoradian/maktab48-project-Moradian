// import React,{useState} from 'react'
// import {DataGrid} from '@material-ui/data-grid'
// // import { useDispatch, useSelector } from "react-redux";
// import { makeStyles } from '@material-ui/core/styles';
// // import {setOrders,getAOrder} from '../../redux/actions/orderAction'

// const useStyles = makeStyles((theme) => ({
    
  
//     table: {
//         height:400,
//         width:'100%',
//         margin:'30px auto',
   
//       color:'#05280e',
//       [theme.breakpoints.down('sm')]: {
//         width:'100%',
//       },
//       [theme.breakpoints.between(375,768)]: {
//         width:'100%',
//       },
     
//       [theme.breakpoints.between(768,1024)]: {
//         width:'75%',
//         // margin:'auto',
//       }
//     }
// }))
// function TableInModal({orders}) {
    
//     // const [pageSize, setPageSize] = useState(5);
//     const classes = useStyles()

//      const columns = [
//       {field: 'title' , headerName: ' نام کالا '},
//       {field: 'price' , headerName: 'قیمت ' },
//       {field: 'number' , headerName: 'تعداد '} 
//     ]

//     return (
       
//         <div className={classes.table}  dir="rtl">
//            <DataGrid
//                 rows={orders}
//                 columns={columns}
//                 autoPageSize
//             />
//         </div>
//     )
// }

// export default TableInModal



import React, { useState,useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import { useSelector } from "react-redux";
import { StyledTableCell, StyledTableRow } from '../../assets';
import Dialog from '../../components/productPageComponents/edit/Dialog';

export default function TableInModal({orders}) {
  const products = useSelector((state) => state.allProducts.products);
  const [data,setData] = useState()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = useState(false);
  // const { productId } = useParams();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

console.log(orders);
  // const classess = useStyles()

  return (
    <>
    
    <TableContainer >
     <Dialog open={open} handleClose={handleClose} data={data} />
      
      <Table  aria-label="customized table">
      <TableHead>
          <StyledTableRow>
            <StyledTableCell  align="right">نام کالا</StyledTableCell>
            <StyledTableCell align="right">قیمت</StyledTableCell>
            <StyledTableCell align="right">تعداد</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
      
       
        <TableBody>
        {orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <StyledTableRow key={item.id}>
             
              <StyledTableCell style={{fontSize: '15px'}} align="right" >{item.title}</StyledTableCell>
              
              <StyledTableCell style={{fontSize: '15px'}}  align="right" >{item.price}</StyledTableCell>
             
                
                <StyledTableCell  style={{fontSize: '15px'}} align="right">{ item.num}</StyledTableCell>
             
               
              
            </StyledTableRow>
            
          ))}
       
        </TableBody>
      </Table>
      <TablePagination
        dir="ltr"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage=" تعداد سطر های هر صفحه"
      />
    
    </TableContainer>
    </>
  )
}