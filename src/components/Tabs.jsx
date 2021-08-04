import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabComponent({selectedTab,onChange,className,classNameParent}) {
  
   
  
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
