import React,{useEffect} from 'react'
import { Typography,Button} from '@material-ui/core';
import Img from '../../../assets/images/OIP.jpg';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import { Paper } from '@material-ui/core';
import { useStyles } from './style';
import { setCarts,deleteAll } from '../../../redux/actions/basketAction';

const PaymentForm = ({backStep}) => {
 
    const classes = useStyles()
    const dispatch = useDispatch()
    const basket = useSelector(state => state.baskets.cardProducts)
    useEffect(()=>{
        dispatch(setCarts())
        console.log(basket);
    },[])
    const handleDelete =() => {
       dispatch(deleteAll())
       console.log( dispatch(deleteAll()));
    }
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                <Typography variant="h4" gutterBottom style={{margin: '20px 0',textAlign:'center'}}>درگاه پرداخت</Typography>
{/*                
                <Divider/> */}

                <img src={Img} style={{margin:'0 30px',width:'90%'}} alt="img"/>
                <br/>
                <br/>
                <br/>
                            <div style={{display:'flex',justifyContent:'space-around'}}>
                                <Button type="submit" variant="contained"   component={Link} to="/Payment/SuccsessPayment" style={{width:'50%',backgroundColor:'#0d5b36',color:'white'}} onClick={handleDelete}>پرداخت</Button>
                                <Button variant="contained" component={Link} to="/Payment/FailedPayment" style={{width:'20%',backgroundColor:'#df1c12',color:'white'}} >انصراف</Button>
                            </div>
                </Paper>
            </main>
        </>
    )
}

export default PaymentForm
