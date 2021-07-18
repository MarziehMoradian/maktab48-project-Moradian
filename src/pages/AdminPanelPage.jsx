import * as React from 'react';
import ImageLogo from '../components/imgeLogo';
import { isLoggedIn ,logout} from "./../utils/auth";
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import TabComponent from '../components/Tabs';
import ProductManagement from '../pages/Productsmanagement';
import { Button } from '@material-ui/core';
import PriceManagment from '../components/TableProducts';
import OrderManagment from './OrderManagment';


//Styles
const useStyles = makeStyles ((theme) => ({
    appBar: {
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent:'space-around',
        backgroundColor: '#ffffff',
        flexGrow: 1,
        minWidth: 650,
        alignItems:'flex-start',
        width: 'auto',
        background: 'rgb(26, 131, 105)',
        color:' white',
        fontSize: '16px',
        padding: '15px 40px',
        
      
    },
  box: {
    backgroundColor: theme.palette.background.paper,
  },
  exist: {
    
     backgroundColor:'#c32b34',
    color:'white',
  
    fontSize: '18px',
    fontWeight:'bold',
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

  const handleGoToLogin = () => {
    history.push("/login");
    logout()
  };


  return (
    
    <Box className={classes.box}>
       <AppBar  className={classes.appBar} position="static">
            <ImageLogo />
            {isLoggedIn() && (
              <>
              <TabComponent selectedTab={setSelectedTab} onChange={handleChange}/>
              <Button className={classes.exist} onClick={handleGoToLogin} >  خروج</Button>
            </>
           
          )}
 
        </AppBar>

        {selectedTab === 0 && <ProductManagement/>}
        {selectedTab === 1 && <PriceManagment/>}
        {selectedTab === 2 && <OrderManagment/>}

      </Box>
        

      
    
  );
}

export default AdminPanelPage
