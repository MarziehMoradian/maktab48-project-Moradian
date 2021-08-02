import React,{useEffect} from 'react';
import Dialog from '../../components/productPageComponents/Dialog';
import Table from '../../components/productPageComponents/Table';
// import Table from '../components/TableProducts';
import ButtonModal from '../../components/productPageComponents/ButtonModal';
import { getProducts  } from '../../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
// import { useStyles } from '../assets';
import {  makeStyles } from '@material-ui/core';
import Form from '../../components/productPageComponents/Form';
function ProductTable() {

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getProducts()); 
    }, []);
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
            padding:'7px 18px',
            fontSize:'18px',
            margin:theme.spacing(7,4),
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
            
          }
     }))
      const classess = useStyles()

    return (
      <div style={{textAlign:'center',marginTop:'120px'}}>
            <h1 style={{textAlign:'center',marginTop:'20px'}}>صفحه مدیریت کالا ها</h1>
         <div style={{display:'flex',justifyContent: 'space-around'}}>
                <Dialog open={open} handleClose={handleClose} />
                <Table />
                <ButtonModal onClick={handleClickOpen} className={classess.btnAdd}  />
      
        </div>
        </div>
        
    )
}

export default ProductTable
