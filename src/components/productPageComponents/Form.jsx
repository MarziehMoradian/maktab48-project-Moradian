import { TextField, Grid, makeStyles, Button, InputLabel } from '@material-ui/core'
import React,{useState} from 'react'
import DropDown from './DropDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct  } from '../../redux/actions/productActions';
// import ImageUpload from 'image-upload-react';
import { useForm } from 'react-hook-form';
// import ImageUploader from 'react-images-upload';
import 'image-upload-react/dist/index.css';

// const initialValues = {
//     id:0,
//     title:'',
//     category:'',
//     price:'',
//     describtion:'',
//     image:'',
// }

const useStyle = makeStyles (theme => ({
    root:{
        
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1),
            
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    button: {
        // marginTop:'2.7rem',
        margin: theme.spacing(3,20),
        background:'#b31515',
        color:'white',
        width:'50%'
    },
    text:{
        border: '1px solid black',
        height:'100px',
        marginRight:'0.5rem'
    },
    lable: {
        fontSize: '15px',
        fontWeight: 'bold'
    },
    error: {
        color:'red'
    }
}))
function Form({addItem}) {
    const classes = useStyle();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [image, setImage] = useState()
    const { register, handleSubmit, control, errors } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
          title: '',
          description: '',
          category:'',
          price:'',  
        },
      });
    const handleImageSelect = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const onSubmit = (e,data) => {
        // e.preventDefault();
        let id = Math.floor(Math.random()*100)
        // //addItem
        // addItem({name, categoury, text})
        // setName("");
        // setCategoury("");
        // setText("");
        
        
        dispatch(createNewProduct({id, title,price,description,category, image}));
        // dispatch(getProducts());
        setTitle("");
        setCategory();
        setDescription("")
     
    }
      const handleChangeIamge = (e) => {
        setImage(e.target.value)
      }
      const onImageChange=(event)=>{
        if (event.target.files&& event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img))
        }
      }

    return (
     
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
                <Grid item xs={12} >
                    <InputLabel >نام کالا :</InputLabel>
                    <TextField 
                        variant = "outlined"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                        size="small"
                        name="title"
                        fullWidth
                        required 
                        inputRef={register({
                            required: 'لطفا عنوان خود را وارد کنید',
                        
                          })}
                          autoComplete='current-title'
                          error={!!errors.title}
                    />
                </Grid>
                     {errors.title && (
                        <span className={classes.error}>{errors.title.message}</span>
                    )}
                <br/>
              
               <Grid item xs={12}>
               <InputLabel >دسته بندی:</InputLabel>
            
                    <DropDown
                        name="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        fullWidth
                        required 
                      
                    />
                </Grid>
                {errors.category && (
                        <span className={classes.error}>{errors.category.message}</span>
                )}
                <br/>
               <Grid item xs={12}>
                 
                    <InputLabel >توضیحات:</InputLabel>
                    <br/>
                    {/* <MUIRichTextEditor label="..." className={classes.text} defaultValue={description}  /> */}
                    <TextareaAutosize 
                        style={{ width:'80%',height:'100px',marginRight:'0.5rem'}} 
                        value={description} 
                        name="description"
                        onChange={(e)=>setDescription(e.target.value)} 
                        fullWidth  
                        required 
                        inputRef={register({
                            required: 'لطفا توضیحاتی را برای کالای خود وارد کنید',
                            pattern: {
                              value: /^[a-zA-Z0-9آ-ی]{5,200}$/,
                            message: 'توضیحات باید بین 5 تا 200 کاراکتر باشد',
                            },
                        })}
                        
                        autoComplete='description'
                        error={!!errors.description}
                        
                    />

                </Grid>
                    {errors.description && (
                        <span className={classes.error}>{errors.description.message}</span>
                    )}
                <br/>


                <Grid>   
                    <InputLabel>تصویر کالا :</InputLabel>
                  
                    {/* <ImageUpload 
                        handleImageSelect={handleImageSelect}
                        imageSrc={image}
                        setImageSrc={setImage}
                        style={{
                            background:'#03939d',
                            height:'70px',
                            width:'25rem',
                        }}
                        

                    /> */}
                     <img src={image}/>
                    <h1>select image</h1>
                    <input type="file" name="myImage" onChange={onImageChange}/>
                </Grid>
               
                <Grid item xs={6} >
                  <Button variant="contained"  className={classes.button}  type="submit" >ذخیره</Button>
                </Grid>

            </Grid>
            
        </form>
      
        
    )
}

export default Form

