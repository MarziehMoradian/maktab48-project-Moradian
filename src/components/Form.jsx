import { TextField, Grid, makeStyles, Paper, Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import DropDown from './DropDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts, createNewProduct  } from '../redux/actions/productActions';
import ImageUpload from 'image-upload-react';

const initialValues = {
    id:0,
    title:'',
    category:'',
    price:'',
    describtion:'',
    image:'',
}

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
        marginTop:'2.7rem'
    },
    text:{
        
    }
}))
function Form({addItem}) {
    const classes = useStyle();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState()
 
    const handleImageSelect = (e) => {
      setImageSrc(URL.createObjectURL(e.target.files[0]))
    }
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts.products);

    const handleSubmit = (e,data) => {
        e.preventDefault();
        let id = Math.floor(Math.random()*100)
        // //addItem
        // addItem({name, categoury, text})
        // setName("");
        // setCategoury("");
        // setText("");
        dispatch(createNewProduct({id, title,price,description,category, imageSrc}));
        // dispatch(getProducts());
        
        setTitle("");
        setCategory();
        setDescription("")
        
        
    }
  

    return (
        
        <form  className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
              
            
                <br/>
                
                <Grid item xs={12}>
                    <lable style={{padding: '0.5vw',fontSize: '20px',fontFamily:" 'Lato', sans-serif",fontFamily: "'Scheherazade', serif",fontWeight: 'bold'}}>نام کالا :</lable>
                    <br/>
                    <TextField 
                        variant = "outlined"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                
              
               <Grid item xs={12}>
               <lable style={{padding: '0.5vw',fontSize: '20px',fontFamily:" 'Lato', sans-serif",fontFamily: "'Scheherazade', serif",fontWeight: 'bold'}}>دسته بندی:</lable>
                    <DropDown
                        name="clothes"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        
                    />
                </Grid>

               <Grid item xs={12}>
                   <div>

                    <lable style={{padding: '0.5vw',fontSize: '20px',fontFamily:" 'Lato', sans-serif",fontFamily: "'Scheherazade', serif",fontWeight: 'bold'}}>توضیحات:</lable>
                   </div>
                   <TextareaAutosize aria-label="" minRows={3} style={{width:'80%',height:'100px',marginRight:'0.5rem'}}  value={description} onChange={e => setDescription(e.target.value)} />;
                </Grid>

                  <Grid item xs={8}>
                    <lable style={{padding: '0.5vw',fontSize: '20px',fontFamily:" 'Lato', sans-serif",fontFamily: "'Scheherazade', serif",fontWeight: 'bold'}}>تصویر کالا :</lable>
                    <br/>
                    <ImageUpload 
                    handleImageSelect={handleImageSelect}
                    imageSrc={imageSrc}
                    setImageSrc={setImageSrc}
                    style={{
                        width: 120,
                        height: 120,
                        background: 'blue',
                        // marginLeft: "200%",
                    }}
                    />
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" color="primary" className={classes.button} style={{margin:'1rem 15rem',padding:'0.5rem 2rem'}} type="submit" >ذخیره</Button>
                </Grid>

            </Grid>
            
        </form>
        
    )
}

export default Form

