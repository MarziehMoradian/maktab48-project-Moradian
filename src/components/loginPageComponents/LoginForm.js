import React,{useState} from 'react';
import { useStyles} from '../../assets/index';
import Button from '@material-ui/core/Button';
import { Grid, TextField} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';
import { login } from '../../api/Login';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core';
import img from '../../assets/images/R (5).png'

const useStyle = makeStyles ((theme) => ({
      remember: {
        margin: theme.spacing(0, -1, 1),
      },
      text: {
        margin: theme.spacing(1, 0, 1),
      }
}))
function LoginForm() {

     //Hooks
     const classes = useStyles()
     const history = useHistory()
     const [password,setPassword] = useState();
     const [userName,setUserName] = useState();
     const { register, handleSubmit, errors } = useForm({
         mode: 'onChange',
         reValidateMode: 'onChange',
         defaultValues: {
           userName: '',
           password: '',
           
         },
       });
 
 
     //Functions For Handle Actions
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
                 if("token" === undefined || "token" === null || "token" === ""){
                     window.location.reload();
                                 
                 }else{
                     history.push('/adminPanel');
                 }
                 
             })
             .catch((err) => console.error(err))
         }           
     };
    const classess = useStyle()

    return (
        <div className={classes.paper}>
                <Grid align="center">
                    {/* <Grid className={classes.avatar}> */}
                        <img src={img} height="200px" alt="img" />
                    {/* </Grid> */}
                    <Typography component="h1" variant="h5" >ورود به پنل مدیریت </Typography>  
                </Grid>


                <form className={classes.form}  noValidate autoComplete="off"  onSubmit={handleSubmit(onSubmit)}>
                    <lable>نام کاربری </lable>
                    <TextField 
                        variant="outlined" 
                        name="userName" 
                        size="small" 
                        fullWidth  
                        required 
                        
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
                        className={classess.remember}
                        name="remember"
                        control = {
                            <Checkbox
                                name="checkedB"
                                color="primary"
                                
                            />
                        }
                        label="مرا بخاطر بسپار"
                    />
                
                    <Button type="submit" color="primary" fullWidth variant="contained" size="large" className={classes.submit} >ورود</Button>
                        <br/>
                    <Typography item xs className={classess.text}  >
                        <Link href="#" >
                            رمز عبور را فراموش کردم
                        </Link>
                    </Typography>
                        
                    <Typography item xs >
                        آیا حساب کاربری دارید؟
                        <Link href="#" >
                            ثبت نام
                        </Link>
                    </Typography>

             </form>
            </div>
    )
}

export default LoginForm
