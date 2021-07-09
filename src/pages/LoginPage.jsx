import React,{useState} from 'react';
import { useStyles, defaultProps } from '../assets';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';
import { Grid, Paper, TextField} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import { login } from '../api/Login';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    error: {
        color:'red',
        
    }
})
const Input = () => {
const history = useHistory()

    const [password,setPassword] = useState();
    const [userName,setUserName] = useState();
    const { register, handleSubmit, control, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          userName: '',
          password: '',
          
        },
      });

    const handleChange = (e) => {
        if(e.target.name === 'userName') {
            setUserName(e.target.value);
        }else{
            setPassword(e.target.value)
        }

    }
 

    const onSubmit = (data )=>{
        if((userName,password)) {
            login(userName,password)
            .then((res) => {
                localStorage.setItem("token",res.data.token);
                window.location.reload();
                
            })
            .catch((err) => console.error(err))
        }
                history.push('/adminPanel');
    };

    const classes = useStyle();
    const  paperStyle={
        padding: 20,
        height: '80vh',
        width:'30vw',
        margin: '20px auto'
    }
    
    const btnStyle={margin:'8px 0'}
    const linkStyle={textDecorationLine:'none'}
    const imgStyle={width:'50px',height:'10px'}

    return ( 
        <Grid>
           
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Grid style={{width:'7.5rem',height:'5rem'}}  >
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Carrefour_Market_logo.svg" imageStyle={{width:'7.5rem',height: '4rem',margin:'0 auto'}} />
                    </Grid>
                    <h1 style={{marginTop:'35px'}}>ورود به پنل مدیریت </h1>  
                </Grid>
                <form className={classes.inputs} noValidate autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
                    <lable>نام کاربری </lable>
                    <TextField 
                        variant="outlined" 
                        name="userName" 
                        size="small" 
                        fullWidth  
                        required 
                        style={btnStyle}
                        inputRef={register({
                            required: 'نام کاربری خود را وارد کنید',
                            pattern: {
                            //   value: /^[a-zA-Z0-9_]{5,20}$/,
                              message: 'لطفا نام کاربری خود را بصورت صحیح وارد کنید',
                            },
                          })}
                        value={userName}
                        autoComplete='userName'
                        error={!!errors.userName}
                        onChange={handleChange}
                    />

                    {errors.userName && (
                        <span className={classes.error}>{errors.userName.message}</span>
                    )}
                    <br/>
                    <br/>
                    <lable>رمز عبور </lable>
                    <TextField 
                        variant="outlined" 
                        size="small"
                        type="password"
                        name="password" 
                        fullWidth
                        required 
                        inputRef={register({
                            required: 'لطفا رمز عبور خود را وارد کنید',
                            pattern: {
                              value:/^[a-zA-Z0-9]{8,}$/,
                              message: 'رمز عبور خود را بصورت صحیح وارد کنید',
                            },
                            // minLength: {
                            //     value: 8,
                            //     message: 'رمز عبور باید بین 8 تا 12 کاراکتر باشد'
                            // }
                          })}
                          onChange={handleChange}
                          value={password}
                          autoComplete='current-password'
                          error={!!errors.password}
                        />
                        {errors.password && (
                          <span className={classes.error}>{errors.password.message}</span>
                        )}
                        <br/>
                        <br/>

                    <FormControlLabel
                            style={btnStyle}
                            name="remember"
                        control = {
                            <Checkbox
                                name="checkedB"
                                color="primary"
                                
                            />
                        }
                        label="مرا بخاطر بسپار"
                    />
                
                    <Button type="submit" color="primary" fullWidth variant="contained" size="large" style={btnStyle} >ورود</Button>

                    <Typography style={btnStyle} >
                        <Link href="#" style={linkStyle}>
                            رمز عبور را فراموش کردم
                        </Link>
                    </Typography >
            
                    <Typography style={btnStyle}>
                        آیا حساب کاربری دارید؟
                        <Link href="#" style={linkStyle} >
                            ثبت نام
                        </Link>
                    </Typography>
             </form>
            </Paper>
            
        </Grid>




   
    );
}
 
export default Input;