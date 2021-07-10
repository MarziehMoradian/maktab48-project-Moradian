import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles,  } from '@material-ui/core/styles';


const useStyle = makeStyles ({
    paper: {
        
        fontSize:'18px',
        fontWeight:'bold'
        
    },
  
})
function TabComponent({selectedTab,onChange}) {
  
    const classes =useStyle()
  
    return (
        <div>
           
                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={onChange}
                    
                >
                    <Tab label="کالا ها" className={classes.paper} />
                    <Tab label="موجودی و قیمت ها" className={classes.paper}/>
                    <Tab label="سفارش ها" className={classes.paper}/>
                </Tabs>
        
            
        </div>
    )
}

export default TabComponent
