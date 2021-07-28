import React,{useState} from 'react';
import { Paper,Stepper, Step,  StepLabel,Typography,CircularProgress,Divider, Button } from '@material-ui/core';
import { useStyles } from './style';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
// const steps = [' فرم اطلاعات خریدار  ', '  فرم پرداخت  ']

const ChackoutForm = () => {
    const classes = useStyles()
    // const [activeStep,setActiveStep] = useState(1)
    // const [shippingData, setShippingData] = useState({})
    // const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1)
    // const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1)
    // // const next = (data) => {
    //     setShippingData(data);
    //     nextStep()
    // }
    // const Confirmation = () => (
    //     <div>
    //         Confirmation
    //     </div>
    // )
    // const Form = () => activeStep === 0
    // ?<AddressForm next={next}/>:
    // <PaymentForm shippingData={shippingData} backStep={backStep}/>
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center" style={{color:'#0a1c12'}}>نهایی کردن خرید</Typography>
                    <AddressForm/>
                    {/* <Stepper activeStep={0} className={classes.stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{ step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> */}
                    {/* {activeStep === steps.length ? <Confirmation/>: <Form/>} */}
                </Paper>
            </main>
            
        </>
    )
}

export default ChackoutForm
