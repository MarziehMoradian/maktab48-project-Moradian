import { makeStyles,fade } from "@material-ui/core/styles";

const drawerWidth = 0 ;

export const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow:'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
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
    grow:  {
        flexGrow: 1,
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

}))