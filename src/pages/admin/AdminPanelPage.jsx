import * as React from 'react';
import { isLoggedIn } from "../../utils/auth";
import { makeStyles} from '@material-ui/core/styles';
import TabComponent from '../../components/Tabs';
import ProductManagement from '../admin/Productsmanagement';
import {  CssBaseline,} from '@material-ui/core';
import PriceManagment from './PriceManagement';
import OrderManagment from './OrderManagment';


//Styles
const useStyles = makeStyles ((theme) => ({
    appBar: {
        display:'flex',
        // flexDirection: 'row',
        // flexWrap: 'nowrap',
        // justifyContent:'space-around',
        backgroundColor: '#ffffff',
        // flexGrow: 1,
        // alignItems:'flex-start',
        // width: 'auto',
        // background: 'rgb(26, 131, 105)',
        color:' white',
        // fontSize: '16px',
        // padding: '15px 40px',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
          
        }),

    },
  box: {
    backgroundColor: theme.palette.background.paper,
  },
  exist: {
    
    backgroundColor:'#c32b34',
    color:'white',
    fontSize: '18px',
    fontWeight:'bold',
    width:'100px',
    height:'50px',
    marginTop: '-100px',
    marginRight:'80%',
    
    [theme.breakpoints.down('sm')]: {
      marginTop: '-100px',
      marginRight:'80%',
      width:'50px',
      height:'30px',
      fontSize: '15px',
      fontWeight:'bold',
    },
    [theme.breakpoints.between(375,768)]: {
       marginTop: '-100px',
      marginRight:'80%',
      width:'50px',
      height:'30px',
      fontSize: '15px',
      fontWeight:'bold',
    },
   
    [theme.breakpoints.between(768,1024)]: {
      marginRight:'80%',
      marginTop: '-100px',
     
      width:'70px',
      height:'40px',
      fontSize: '16px',
      fontWeight:'bold',
    
      // margin:'auto',
    }
  },
  img:{
    width:'100px',
    height:'100px'
  },
  tabs:{
    fontSize:'18px',
    fontWeight:'bold',
    
  },
  toolbar:{
 
  }
}))
const  AdminPanelPage = (props) => {

  const {match, history} = props;
  const {params} = match;
  const {page} = params;
  const classes =useStyles()
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
  // const [selectedTab, setSelectedTab] =React.useState(0);
   
  //Actions
  const handleChange = (event, newValue) => {
     
      history.push(`/adminPanel/${tabNameToIndex[newValue]}/`)  
      setSelectedTab(newValue);
      
    }



  return (
    
    < >
    <CssBaseline/>
     
        {isLoggedIn() && (
              <>
              <TabComponent selectedTab={setSelectedTab} onChange={handleChange} className={classes.tabs}/></>
           
           )}

        {selectedTab === 0 && <ProductManagement/>}
        {selectedTab === 1 && <PriceManagment/>}
        {selectedTab === 2 && <OrderManagment/>}

      </>
        

      
    
  );
}

export default AdminPanelPage
