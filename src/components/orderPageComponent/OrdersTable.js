import React, { useState } from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import ModalOrders from './ModalOrders'
import { Button } from '@material-ui/core';
import { StyledTableCell, StyledTableRow } from '../../assets';
import { makeStyles } from '@material-ui/core';
  
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


const  OrdersTable = ({orders}) => {
  const classes = useStyles()
  // const dispatch = useDispatch();
  // const selectedOrder = useSelector((state) => state.allOrders.selectedOrder)
  
    


  
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(5);
      const [showOrder, setShowOrder] = useState({});
      const [openModal, setOpenModal] = useState(false);

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
      
      

      const handleOpen = (orderId) => {
        setOpenModal(true);
        setShowOrder(orderId);
        console.log(orderId);
      };
    
      const handleClose = () => {
        setShowOrder({});
        setOpenModal(false);
      
      };
      
    return (
   
        <div >
        {/* // <Paper className={classes.root}> */}
         <TableContainer className={classes.table}>
            <Table  aria-label="customized table">
              <TableHead >
              <StyledTableRow>
                
                <StyledTableCell align="right">نام کاربر</StyledTableCell>
                <StyledTableCell align="right">مبلغ کل</StyledTableCell>
                <StyledTableCell align="right">زمان ثبت سفارش</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            </TableHead>
              <TableBody>
                {orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => {
                    return (
                      <StyledTableRow key={order.id}>
                        <StyledTableCell align="right" >{order.name}</StyledTableCell>
                        <StyledTableCell align="right">{order.sum}</StyledTableCell>
                        <StyledTableCell align="right">{order.orderTime}</StyledTableCell>
                        <StyledTableCell align="right" >
                          <Button onClick={(e) => handleOpen(order)} variant="text" >بررسی سفارش</Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
            <TablePagination
            dir='ltr'
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage=" تعداد سطر های هر صفحه"
          />
          </TableContainer>
         
        
        {openModal && (
          <ModalOrders
            open={openModal}
            handleClose={handleClose}
            order={showOrder}
          />
        )}
      </div>
    )
}


 


export default OrdersTable


