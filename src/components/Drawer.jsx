import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Image from 'material-ui-image';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import SettingsIcon from '@material-ui/icons/Settings';
import Img from '../assets/images/1.png';
import Table from './pricePageComponent/TableProducts'
import TabComponent from './Tabs';
import { logout } from '../utils/auth';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   

  },
  avatar: {
    width: 29,
    height: 29,
    border: `2px solid #d8f8e6`,
  },

  icon: {
    marginLeft:'80%',
    width: theme.spacing(4),
    height: theme.spacing(4),
    color:'#05280e',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'35%',
    },
    [theme.breakpoints.between(375,768)]: {
      marginLeft:'50%',
    },
   
    [theme.breakpoints.between(768,1024)]: {
      marginLeft:'70%'
    },


  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const {match, history} = props;
  const {params} = match;
  const {page} = params;
  
  const indexToTabName = {
    ProductManagement:0,
    PriceManagment:1,
    OrderManagment:2,
  }
  const tabNameToIndex = {
    0: "productManagment",
    1:"PriceManagment",
    2:"OrderManagment",
  }
  const [selectedTab, setSelectedTab] =React.useState(indexToTabName[page]);
  const handleChange = (event, newValue) => {
     
    history.push(`/adminPanel/${tabNameToIndex[newValue]}/`)  
    setSelectedTab(newValue);
    
  }

  const handleGoToLogin = () => {
    history.push("/login");
    logout()
  };



  return (
    <div className={classes.root} dir="ltr" >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{background:'#f2fdf5' ,border:'none',color:'#d8f8e6'}}
      >
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            {/* <MenuIcon /> */}  <img src={Img} style={{width: '50px',height:'50px'}} alt="بیشتر"/>
          </IconButton>
        
            <Typography variant="h6" noWrap style={{color:'black'}}>
            
            </Typography>
          <NotificationsNoneIcon className={classes.icon} />
        
          <StyledBadge
            
           
            anchorOrigin={{
              horizontal: 'right',
              vertical:'bottom',
            }}
          variant="dot"
          >
            {/* <TabComponent selectedTab={setSelectedTab} onChange={handleChange}/> */}
          {/* <Avatar alt="Remy Sharp" src="https://picsum.photos/200"  className={classes.avatar}/> */}
        </StyledBadge>
        
        </Toolbar>
      </AppBar>
      <Drawer
      
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{background:'#05280e',color:'white'}}>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            
          </IconButton>
        </div>
       
        <List style={{background:'#05280e',color:'white'}}>
       
          
          {['کالا ها', 'موجودی و قیمت', 'سفارش ها'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{color:'white'}}>
              {/* <List > */}
           <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    
                >
                   <ListItem><Tab label="کالا ها"  /></ListItem>
                   <ListItem><Tab label="موجودی و قیمت ها" /></ListItem>
                   <ListItem><Tab label="سفارش ها" /></ListItem>
                </Tabs>
        
        {/* </List> */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Table/>
      </main>
    </div>
  );
}
