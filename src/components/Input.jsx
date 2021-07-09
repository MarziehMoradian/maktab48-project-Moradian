import React,{useState} from 'react';
// import TextField from '@material-ui/core/TextField';
import { useStyles, defaultProps } from '../assets';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import { borders } from '@material-ui/system';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import { Grid, Paper, TextField} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { login } from '../api/Login';


const Input = () => {
    const [password,setPassword] = useState();
    const [userName,setUserName] = useState();

    const { register, handleSubmit, control, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          userName: '',
          password: '',
          remember: false,
        },
      });

    const handleChange = (e) => {
        if(e.target.name === 'userName') {
            setUserName(e.target.value);
        }else{
            setPassword(e.target.value)
        }

    }
 

    const onSubmit = data =>{
        if((userName,password)) {
            login(userName,password)
            .then((res) => {
                localStorage.setItem("token",res.data.token);
                window.location.reload();
            })
            .catch((err) => console.error(err))
        }
    };

    const classes = useStyles();
    const  paperStyle={
        padding: 20,
        height: '70vh',
        width:'30vw',
        margin: '20px auto'
    }
    const btnStyle={margin:'8px 0'}
    const linkStyle={textDecorationLine:'none'}

    return ( 
        <Grid>
            <DevTool control={control} />
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <h1>صفحه ورود</h1>
                    
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
                            minLength: {
                                value: 8,
                                message: 'رمز عبور باید بین 8 تا 12 کاراکتر باشد'
                            }
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
                                inputRef={register()}
                            />
                        }
                        label="مرا بخاطر بسپار"
                    />
                
                    <Button type="submit" color="primary" fullWidth variant="contained" size="large" style={btnStyle}>ورود</Button>

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