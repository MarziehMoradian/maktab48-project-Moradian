import React,{useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
// import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
// import {setOrders,getAOrder} from '../../redux/actions/orderAction'

const useStyles = makeStyles((theme) => ({
    
  
    table: {
        height:400,
        width:'100%',
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
function TableInModal({orders}) {
    
    // const [pageSize, setPageSize] = useState(5);
    const classes = useStyles()

     const columns = [
   
      {field: 'title' , headerName: ' نام کالا ', width:150},
      {field: 'price' , headerName: 'قیمت ', width:150 },
      {field: 'number' , headerName: 'تعداد ',width:100},
     
      
    ]

    return (
       
        <div className={classes.table}  dir>
           <DataGrid
                rows={orders}
                columns={columns}
                
              
            />
        </div>
    )
}

export default TableInModal
