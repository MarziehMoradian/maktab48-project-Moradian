import React, { useState,useEffect } from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import { getProducts, deleteProduct, editProduct, getAProduct  } from '../redux/actions/productActions';
import EditIcon from '@material-ui/icons/Edit';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from './Dialog';



const useStyles = makeStyles({
  table: {
    minWidth:650,
    maxWidth:800,
    
    
  },

});





export default function CustomizedTables({onEdit}) {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    
    dispatch(getProducts()); 
  }, []);

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

  return (
    <>
    <TableContainer component={Paper} align="center" className={classes.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">تصویر</TableCell>
            <TableCell align="right">نام کالا</TableCell>
            <TableCell align="right">دسته بندی</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow key={item.id}>
              
              <TableCell align="right" component="th" scope="row"><Avatar  src={item.image}/></TableCell>
              <TableCell  align="right" >{item.title}</TableCell>
              <TableCell align="right" >{item.category}</TableCell>
              <TableCell align="right" component="th" scope="row" ><button onClick={(e)=>handleDelete(item.id)}>حذف </button><button onClick={(e)=>onEdit(item.id)}>ویرایش</button></TableCell>
              
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
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
   
     
    
    </>
  );
}



