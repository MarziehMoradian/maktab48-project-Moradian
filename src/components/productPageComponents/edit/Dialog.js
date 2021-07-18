import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import { useStyles } from '../../../assets/index';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    
    
  },
}))(MuiDialogContent);


export default function CustomizedDialogs({open,handleClose,data}) {


 
  const classess = useStyles()
 
  return (
    <div >
    
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{background:'#b31515',color:'#c2c6bb'}}>
          افزودن کالا
        </DialogTitle>
        <DialogContent dividers  >
          
            <Form className={classess.paperModal} action={data} />
           
        </DialogContent>
       
      </Dialog>
    </div>
  );
}
