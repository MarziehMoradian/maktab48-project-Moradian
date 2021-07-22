import { Button, CardHeader, LinearProgress } from '@material-ui/core'
import React from 'react'
import Img from '../assets/images/R (5).png'
import Img1 from '../assets/images/R (1).png'
const Headers = () => {
    return (
        <div>
            <header style={{height:'400px',background:"linear-gradient(to right, #b0ffb0,#ecffec)",width:'100%'}}>
                <div style={{padding:'10px 50px'}}>
                    <Button  variant="text" size="large" style={{padding:'10px 20px',fontSize:'18px',fontWeight:'bold',color:'#6d846d'}}>کالا ها</Button>
                    <Button variant="text" size="large" style={{padding:'10px 20px',fontSize:'18px',fontWeight:'bold',color:'#6d846d'}}> موجودی و قیمت</Button>
                    <Button variant="text" size="large" style={{padding:'10px 20px',fontSize:'18px',fontWeight:'bold',color:'#6d846d'}}>سفارش ها</Button>
                    {/* <div><img src={Img1} style={{height:'400px',padding:'5px',position:'absolute'}}/></div> */}
                </div>
                <img src={Img} style={{height:'300px'}} />
                
            </header>
        </div>
    )
}

export default Headers
