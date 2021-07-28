import React from 'react'
import { Paper,Typography } from '@material-ui/core'
import { useStyles } from './style';
import { IoIosCheckmarkCircle} from "react-icons/io";
const SuccessPayment = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <IoIosCheckmarkCircle style={{height:'100px',color:'green',width:'100px'  }} />
                    <Typography variant="h4">پرداخت با موفقیت انجام شد</Typography>
                    </div>
                </Paper>
            </main>
        </>
    )
}

export default SuccessPayment
