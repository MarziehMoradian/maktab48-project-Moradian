import { makeStyles,fade } from "@material-ui/core/styles";

const drawerWidth = 0 ;

export const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow:'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        background:'linear-gradient(to right,#0c3e19,#2ec94c,white)' ,
        [theme.breakpoints.up('sm')]:{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
       
    },
    title: {
        flexGrow: 1,
        alignItems:'center',
        display:'flex',
        textDecoration:'none',
        fontWeight:'bold'
    },
    image: {
        marginRight:'10px',
    },
    menuButton:  {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display:'none'
        },
    },
    show:{
        display:''
    },
    notShow:{
        display:'none'
    },
    grow:  {
        flexGrow: 1,
    },
    button:{
        fontSize: '18px',
        [theme.breakpoints.between(300,425)]: {
            display:'flex',
            flexWrap: 'nowrap',
           
            // flexDirection: 'row'
        },
    },
    search: {
        position: 'relative',
        borderRadius:theme.shape.borderRadius,
        background:fade(theme.palette.common.white,0.15),
        '&:hover':{
            background: fade(theme.palette.common.white,0.25)
        },
        marginRight:theme.spacing(2),
        marginLeft: 0,
        width:'100%',
        [theme.breakpoints.up('sm')] : {
            width:'auto'
        }
    },
    menuButton: {
        marginRight: theme.spacing(5),
        [theme.breakpoints.between(320,425)]:{
          marginRight: theme.spacing(0),
        },
        [theme.breakpoints.between(425,720)]:{
          marginRight: theme.spacing(18),
        },
        [theme.breakpoints.between(425,720)]:{
          marginRight: theme.spacing(18),
        },
      },
      title: {
        flexGrow: 1,
        alignItems:'center',
        display:'flex',
        // textDecoration:'none',
        fontWeight:'bold',
        [theme.breakpoints.down('xs')]:{
         
          flexGrow: 1,
        },
      
      },
      headerOption:{
        display:'flex',
        color:'#e0f8ed',
        flex:1,
        fontWeight:'bold',
        fontSize: '18px',
        justifyContent:'center'
      },
      hambergur:{
        display:'flex',
        flexDirection:'column'
        
      },
      exist:{
        color:'white',
        cursor:'pointer',
        // backgroundColor:'black',
       height:'50px',
       width:'30px',
    
        
        [theme.breakpoints.between(1024,1400)]:{
          marginRight:'200px',
          
          
        },
        [theme.breakpoints.up(1400)]:{
          marginRight:'700px'
        },
      },
      divi:{
        marginRight:'500px',
        display:'flex',
        flexWrap:'nowrap',
        justifyContent:'space-between',
        [theme.breakpoints.down('xs')]:{
          marginRight:'200px',
          
          
        },
        [theme.breakpoints.up(1020,1400)]:{
          marginRight:'600px',
          
          
        },
        [theme.breakpoints.between(425,768)]:{
          marginRight:'100px',
          
          
        },
      },
      btns:{
          fontSize:'18px',
          fontWeight:'bold',
          marginRight:'40px',
          [theme.breakpoints.between(768,900)]:{
              marginRight:'0',
  
            },
      },
      parentDiv:{
          marginLeft:'450px',
          [theme.breakpoints.between(768,1030)]:{
              marginLeft:'100px',
  
            },
      }

}))