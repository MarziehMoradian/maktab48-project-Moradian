import React, { useEffect, useState } from 'react';
import {DataGrid} from '@material-ui/data-grid'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {getNotDeliveryOrders,getDeliveryOrders} from '../redux/actions/orderAction'
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import ModalOrders from './ModalOrders'
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


const  OrdersTable = ({orders}) => {
  const classes = useStyles()
  // const dispatch = useDispatch();
  // const selectedOrder = useSelector((state) => state.allOrders.selectedOrder)
  
    const columns = [
      { id: "name", label: "نام کاربر", minWidth: 150 },
      { id: "sum", label: "مجموع مبلغ", minWidth: 80 },
      {
        id: "orderTime",
        label: "تاریخ سفارش",
        minWidth: 150,
        align: "right",
      },
      {
        id: "buttons",
        label: "",
        minWidth: 150,
        align: "right",
      },
    ]


  
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
   
        <div className={classes.table}>
        <Paper className={classes.root}>
          <TableContainer >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      className={classes.tabelCell}
                    >
                      <h4>{column.label}</h4>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={order.code}
                      >
                        <TableCell align={columns[0].align}>
                          {order.name}
                        </TableCell>
                        <TableCell align={columns[1].align}>
                          {order.sum}
                        </TableCell>
                        <TableCell align={columns[2].align}>
                          {order.orderTime}
                        </TableCell>
                        <TableCell align={columns[3].align}>
                          <Button onClick={(e) => handleOpen(order)}>بررسی سفارش</Button>
                        </TableCell>
                      </TableRow>
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
         
        </Paper>
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


