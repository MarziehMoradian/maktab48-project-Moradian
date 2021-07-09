import * as React from 'react';
import ImageLogo from './imgeLogo';
import { useHistory, useParams } from 'react-router-dom';
import { isLoggedIn, logout } from "./../utils/auth";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import TabComponent from './Tabs';
import ProductManagement from '../pages/Productsmanagement';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    
    
   
    
  },
  appBar: {
      
      display:'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent:'space-around',
      backgroundColor: '#ffffff',
      flexGrow: 1,
      minWidth: 650,
      
    
  },
 
 
}));


const  MenuAppBar = (props) => {

  const {match, history} = props;
  const {params} = match;
  const {page} = params;
  

  const classes =useStyles()
  // const history = useHistory();

  
  const indexToTabName = {
    "ProductManagement":0
  }
  const [selectedTab, setSelectedTab] =React.useState(indexToTabName[page]);
    const handleChange = (event, newValue) => {
      const i = indexToTabName[newValue]
      // history.push(`adminPan/${i}/`)  
      setSelectedTab(newValue);
      console.log(i)
      

    }

  const handleGoToLogin = () => {
    history.push("/login");
  };


  return (
    
    <Box className={classes.root}>
       <AppBar className="mainHeader header" className={classes.appBar} position="static">
          
            
            <ImageLogo />
           
 
            {isLoggedIn() && (
              <>
              <TabComponent selectedTab={setSelectedTab} onChange={handleChange}/>
              <button className="btn" onClick={handleGoToLogin} >  خروج</button></>
            
           
          )}
              
          
         
        
         
        </AppBar>


        {selectedTab === 0 && <ProductManagement/>}

      </Box>
        

      
    
  );
}

export default MenuAppBar
