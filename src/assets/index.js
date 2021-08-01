import { withStyles,makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export const useStyles = makeStyles((theme) => ({
    inputs: {
      '& > *': {
        margin:'10px 0',
        color:'black'
      },
    },
      error: {
          color:'red',
          
      },
      root: {
          height: "100vh",
          
        },
        image: {
          backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/000/396/067/original/people-shopping-with-credit-card-illustration-vector.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor:
            theme.palette.type === "light"
              ? theme.palette.grey[50]
              : theme.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        paper: {
          margin: theme.spacing(8,4),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
         
        },
        avatar: {
          margin: theme.spacing(1,1,2),
          backgroundColor: theme.palette.secondary.main,
        
        },
        form: {
          width: "100%",
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 3),
        },
      remember: {
        margin: theme.spacing(0, -1, 0),
      },
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
    },
      paperinTable: {
        maxWidth:'60%',
        margin: theme.spacing(3, 'auto', 3),
      },
      icone:{
        color: "#e51f1f"
      },
    paperModal: {
      width: 'auto'
    }
  
}));

export const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '50rem', height: '25rem', margin: 'auto' },
    borderColor: 'text.primary',
  };


  export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#48a27a',
      color: theme.palette.common.white,
      fontWeight:'bold',
      fontSize: 20,
    },
    body: {
      fontSize: 18,
     
    },
  }))(TableCell);
  
  export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#eff6f4',
        
      },
    },
  }))(TableRow);