import {makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    content: {
        
        
        flexGrow:1,
        backgroundColor:theme.palette.background.default,
        padding: theme.spacing(3),
        
    },
    root:{
        flexGrow:1,
    },
    type:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            fontWeight: 'bold',
            marginTop: '25px'
          },
          [theme.breakpoints.between(375,768)]: {
            
          },
         
          [theme.breakpoints.between(768,1024)]: {
            
            // margin:'auto',
          }

    }
   
}))