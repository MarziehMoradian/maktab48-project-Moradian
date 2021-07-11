import React,{useEffect} from 'react';
import Dialog from '../components/Dialog';
import Table from '../components/Table';
import ButtonModal from '../components/ButtonModal';
import { getProducts  } from '../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
// import { useStyles } from '../assets';
import { Box, makeStyles } from '@material-ui/core';
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
            background:'#03939d',
            color:'#fcfdfd',
            border:'none',
            padding:'7px 18px',
            fontSize:'18px',
            margin:theme.spacing(4)
        
          
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
         <>
            <h1 style={{textAlign:'center'}}>صفحه مدیریت کالا ها</h1>
            <Box className={classess.paperInAdminPanel}>
                
                <Dialog open={open} handleClose={handleClose}/>
                <Table />
                <ButtonModal onClick={handleClickOpen} className={classess.btnAdd}  />
            </Box>
        </>
        
    )
}

export default ProductTable
