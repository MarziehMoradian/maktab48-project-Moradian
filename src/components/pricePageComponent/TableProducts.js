import React, { useEffect, useState } from 'react';
import {DataGrid} from '@material-ui/data-grid'
import { getProducts,update} from '../../redux/actions/productActions';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    
  
    table: {
        height:400,
        width:'50%',
        margin:'30px auto',
   
      color:'#05280e',
      [theme.breakpoints.down('sm')]: {
        width:'100%',
      },
      [theme.breakpoints.between(375,768)]: {
        width:'100%',
      },
     
      [theme.breakpoints.between(768,1024)]: {
        width:'75%',
        // margin:'auto',
      }
    }
}))


function TableProducts() {
    const classes = useStyles()
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);
    const [pageSize, setPageSize] = React.useState(5);
    const [editable , setEditable] = React.useState(false);
    const [price,setPrice] = React.useState("");
    const [numbers,setNumbers] = React.useState("")
  
   const handleEdit = (product) => {
     
    setEditable(true)
     setPrice(product.row.price);
     setNumbers(product.row.numbers);

     const productt = {
      "id" : product.row.id,
      "title":product.row.title,
      "category":product.row.category,
      "price":price,
      "image":product.row.image,
      "numbers":numbers,
      "description":product.row.description
     
    }
      dispatch(update(productt));
      console.log(product);

   }

   
  const handleChange = (product) => {
    
   
      if(product.field ==="price"){
        setPrice(product.props.value);
        setNumbers(numbers)
      }
      if(product.field === "numbers") {
          setNumbers(product.props.value)
          setPrice(price)
      }
      

      console.log(product);
  

    
  }

    const columns = [
   
      {field: 'numbers' , headerName: ' موجودی ',width:150, editable: editable},
      {field: 'price' , headerName: 'قیمت',width:150,  editable:editable},
      {field: 'title' , headerName: 'نام کالا',width:150,},
      
    ]

    useEffect(() => {
        dispatch(getProducts()); 
        
      }, []);
      const [selectedRow, setSelectedRow] = useState({});
    const [row, setRow] = useState({});
    const [selectionModel, setSelectionModel] = React.useState([]);
    return (
        <div className={classes.table}  >
            <DataGrid
                
                rows={products}
                columns={columns}
                pageSize={pageSize}
                rowsPerPageOptions={[5, 10, 20]}
                // checkboxSelection 
                // getRowId = {(row) => console.log(row.id)}
                onCellClick={(e) => handleEdit(e)}
                onEditCellChange={(e) => handleChange(e)}
                checkboxSelection
                disableSelectionOnClick
               
                
            />

            <Button></Button>

        </div>
    )
}

export default TableProducts




// import React, { useEffect, useState } from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import { getProducts,editeProduct } from '../redux/actions/productActions';
// import { useDispatch, useSelector } from "react-redux";
// import { StyledTableCell, StyledTableRow } from '../assets';
// import { Button, makeStyles } from '@material-ui/core';
// import {updateProduct} from '../api/products';
// import { TableContainer } from '@material-ui/core';
// const useStyle = makeStyles((theme) => ({
    
  
//     table: {
//         height:400,
//         width:'50%',
//         margin:'30px auto',
   
//       color:'#05280e',
//       [theme.breakpoints.down('sm')]: {
//         overflowX: 'scroll',
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
// export default function CustomizedTables() {

//   const clasess = useStyle()
//   const products = useSelector((state) => state.allProducts.products);
//   const [data,setData] = useState()
//   const [price,setPrice] = useState("");
//   const [number,setNumber] = useState("");
//    const [open,setOpen] = useState(false);

//   const dispatch = useDispatch();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

//   useEffect(() => {
//     dispatch(getProducts()); 
   
//   }, []);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
  
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(event.target.value);
//     setPage(0);
//   };
  
//   const onEdit = (product) => {
  
//     setOpen(true)
  

//   }
 


//   return (

//     <TableContainer  className={clasess.table} dir="rtl">
  
      
//       <Table aria-label="customized table">
//       <TableHead>
//           <StyledTableRow>
           
//             <StyledTableCell align="right">نام کالا</StyledTableCell>
//             <StyledTableCell align="right"> قیمت</StyledTableCell>
//             <StyledTableCell align="right">موجودی</StyledTableCell>
//             <StyledTableCell align="right"></StyledTableCell>
//           </StyledTableRow>
//         </TableHead>
//         <TableBody>
//         {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
//             <StyledTableRow key={item.id}>
              
              
//               <StyledTableCell  align="right" >{item.title}</StyledTableCell>
//               <StyledTableCell   align="right" ><input value={item.price} onChange={(e) => setPrice(e.target.value)} /></StyledTableCell>
//               <StyledTableCell   align="right" ><input value={item.numbers} onChange={(e) => setNumber(e.target.number)} /></StyledTableCell>
//               <StyledTableCell   align="right" ><Button onClick={(e) => onEdit(item.id)}>ویرایش</Button></StyledTableCell>
              
              
//             </StyledTableRow>
//           ))} 
//         </TableBody>
//       </Table>
//       <TablePagination
//         dir="ltr"
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={products?.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//         labelRowsPerPage=" تعداد سطر های هر صفحه"
//       />
    
//   </TableContainer>
  
//   );
// }

