
import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { Button } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import { getProducts, deleteProduct,editeProduct } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from "react-redux";
// import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import lightBlue from '@material-ui/core/colors/lightBlue';
// import EditIcon from '@material-ui/icons/Edit';
import { useStyles,StyledTableCell, StyledTableRow } from '../../assets/index';
import Dialog from '../../components/productPageComponents/edit/Dialog';
import {updateProduct} from '../../api/products'
import Image from 'material-ui-image';


export default function CustomizedTables() {

  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);

  const [data,setData] = useState()
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = useState(false);
  // const { productId } = useParams();


  useEffect(() => {
    dispatch(getProducts()); 
  },[]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProducts());
    
  }
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  
  const handleEdit = (product) => {
    // dispatch(getAProduct (id))
    // dispatch(editeProduct(product));
    // dispatch(getProducts());
    // let product = {
    //   "id":data.id,
    //   "title":title, 
    //   "category":category,
    //   "image":image,
    // }

    updateProduct(product)
    dispatch(editeProduct({ product}));
    setOpen(true)
    setData(product)
    // console.log(product);
    
  }
  const handleClose = () => {
    setOpen(false);
  };


  // const classess = useStyles()

  return (
    <>
    
    <TableContainer className={classes.paperinTable}>
     <Dialog open={open} handleClose={handleClose} data={data} />
      
      <Table className={classes.table} aria-label="customized table">
      <TableHead>
          <StyledTableRow>
            <StyledTableCell align="right" >تصویر</StyledTableCell>
            <StyledTableCell align="right">نام کالا</StyledTableCell>
            <StyledTableCell align="right">دسته بندی</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
      
       
        <TableBody>
        {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <StyledTableRow key={item.id}>
              
              <StyledTableCell align="right" component="th" scope="row" ><Image src={item.image} /></StyledTableCell>
             
              <StyledTableCell  align="right" >{item.title}</StyledTableCell>
              
              <StyledTableCell   align="right" >{item.category}</StyledTableCell>
              
              <StyledTableCell align="right" component="th" scope="row" >
                <IconButton aria-label="delete" >
                    {/* <DeleteIcon fontSize="default" style={{ color: red['A700'] }} onClick={(e)=>handleDelete(item.id)}/> */}
                    <Button fontSize="default" style={{ backgroundColor: red['A700'],color:'white' }} onClick={(e)=>handleDelete(item.id)} >حذف</Button>
                </IconButton >
                <IconButton aria-label="delete" >
                  <Button style={{ backgroundColor:lightBlue[800],color:'white' }} onClick={e => handleEdit(item)}>
                    ویرایش
                    {/* <EditIcon fontSize="default" /> */}
                    </Button>
                </IconButton >
                
                </StyledTableCell>
               
              
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
  );
}
