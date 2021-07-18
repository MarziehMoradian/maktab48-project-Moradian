import React,{useState,useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {delivery} from '../../redux/actions/orderAction'
import { useDispatch } from "react-redux";
import Typography from '@material-ui/core/Typography';
import TableInModal from './TableInModal';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other} > 
      <Typography variant="h6">{children}</Typography>
      {/* {onClose ? (
        // <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}  >
        //   <CloseIcon />
        // </IconButton>
      ) : null} */}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({open,handleClose,order}) {
  const dispatch = useDispatch();
  const [option, setOption] = useState(true);

  useEffect(() => {
    if (order.condition === true){
        setOption(false)
      }; 
      
    }, []);

  const handleDelivery = () => {
    dispatch(delivery({...order,condition:true}))
     console.log(dispatch(delivery({...order,condition:true})));
    handleClose()
  }

  return (
    <div style={{width:'100%'}}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} style={{width:'100%'}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            نمایش سفارش
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
             نام مشتری: {order.name}
          </Typography>
          <Typography gutterBottom>
           آدرس:{order.address}
          </Typography>
          <Typography gutterBottom>
            تلفن: {order.phoneNumber}
          </Typography>
          <Typography gutterBottom>
            زمان ثبت سفارش: {order.orderTime}
          </Typography>
          <Typography gutterBottom>
            زمان تحویل سفارش: {order.deliveryTime}
          </Typography>
          <Typography gutterBottom>
              مبلغ کل: {order.sum}
          </Typography>
           <br/>
           <br/>
           <TableInModal orders={order.orderedProducts}/>
        </DialogContent>
        <DialogActions>
        {option && (
          <Button autoFocus onClick={handleDelivery} color="primary" style={{margin:'auto'}}>
            تحویل شد
          </Button>)}
        </DialogActions>
      </Dialog>
    </div>
  );
}
