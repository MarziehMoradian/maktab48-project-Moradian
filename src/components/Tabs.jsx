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
function TabComponent({selectedTab,onChange,className,classNameParent}) {
  
    const classes =useStyle()
  
    return (
        <div>
           
                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={onChange}
                    
                    className={classNameParent}
                    
                >
                    <Tab label="کالا ها"  className={className} />
                    <Tab label="موجودی و قیمت ها"  className={className}/>
                    <Tab label="سفارش ها"  className={className}/>
                </Tabs>
        
            
        </div>
    )
}

export default TabComponent
