import { makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme)=> ({
    root:{
        maxWidth:'100%',
        '&:hover':{
            boxShadow:'5px 5px 3px 3px #89e69d',
        
        },
      
        // border:'1px solid black'
        
    
        
    },
    media:{
        height:'360px',
        objectFit:'fill',
        paddingTop:'56.25%',
      
    },
    cardActions: {
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent: {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        color:'#04140d'

        
    },
    

}));