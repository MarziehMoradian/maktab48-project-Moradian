import React,{useEffect} from 'react';
import Dialog from '../../components/productPageComponents/Dialog';
import Table from '../../components/productPageComponents/Table';
// import Table from '../components/TableProducts';
import ButtonModal from '../../components/productPageComponents/ButtonModal';
import { getProducts  } from '../../redux/actions/productActions';
import { useDispatch} from 'react-redux';
// import { useStyles } from '../assets';
import { BsPlus } from "react-icons/bs";
import {  makeStyles,Button } from '@material-ui/core';
function ProductTable() {

  const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProducts()); 
    });
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        
      setOpen(true);
    };
   
      const handleClose = () => {
        setOpen(false);
      };

    
     const useStyles = makeStyles((theme)=> ({
        btnAdd:{
            background:'#48a27a',
            color:'#fcfdfd',
            border:'none',
            padding:'5px 18px',
            fontSize:'15px',
            margin:theme.spacing(2,2),
            [theme.breakpoints.down('xs')]:{
               
                // height: '30px',
                fontSize: '10px',
                fontWeight: 'bold'
            },
          
          },
          
          paperInAdminPanel: {
            minWidth: 'auto',
            margin: theme.spacing(1),
            display:'flex',
            // background:'#f6f9f9',
            
          },
          parenBtn:{
            display:'flex',
            justifyContent: 'space-around'
          },
          title:{
            marginTop:'20px',
            [theme.breakpoints.down('xs')]:{
               
              // height: '30px',
              fontSize: '15px',
              fontWeight: 'bold'
          },

          }
     }))
      const classess = useStyles()

    return (
      <div style={{marginTop:'120px',width:'100%'}}>
        <div className={classess.parenBtn}>
          <h1 className={classess.title}>صفحه مدیریت کالا ها</h1>
            <Button onClick={handleClickOpen} className={classess.btnAdd}>اضافه کردن<BsPlus style={{height:'20px',width:'30px'}}/></Button>
          
          </div>
         <div style={{display:'flex',justifyContent: 'space-around',width:'100%'}}>
            <Dialog open={open} handleClose={handleClose} />
            <Table />
          </div>
              
      
        
        </div>
        
    )
}

export default ProductTable
