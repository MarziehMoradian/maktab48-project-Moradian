import {makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    content: {
        
        
        flexGrow:1,
        backgroundColor:theme.palette.background.default,
        padding: theme.spacing(3),
        background:'linear-gradient(to top,#88feac,#bafecf,#ecfef2)'
        
        
    },
    root:{
        flexGrow:1,
        border:'2px solid gray',
        
    },
    type:{
        fontSize:'30px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '50%'
          },
          [theme.breakpoints.between(375,768)]: {
            
          },
         
          [theme.breakpoints.between(768,1024)]: {
            
            // margin:'auto',
          }

    }
   
}))