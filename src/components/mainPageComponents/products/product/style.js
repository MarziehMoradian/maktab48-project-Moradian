import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles(()=> ({
    root:{
        maxWidth:'100%',
        // '&:hover':{
        //     border:'2px solid #38634b'
        // },
        borderRadius:'30px',
    
        
    },
    media:{
        height:'360px',
        
        paddingTop:'56.25%',
      
    },
    cardActions: {
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent: {
        display:'flex',
        justifyContent:'space-between',
        
    }

}));