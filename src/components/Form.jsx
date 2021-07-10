import { TextField, Grid, makeStyles, Button, InputLabel } from '@material-ui/core'
import React,{useState} from 'react'
import DropDown from './DropDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct  } from '../redux/actions/productActions';
import ImageUpload from 'image-upload-react';

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
    }
}))
function Form({addItem}) {
    const classes = useStyle();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [image, setImage] = useState()
 
    const handleImageSelect = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]))
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
        dispatch(createNewProduct({id, title,price,description,category, image}));
        // dispatch(getProducts());
        
        setTitle("");
        setCategory();
        setDescription("")
        
        
    }
  

    return (
     
        <form  className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} >
                    <InputLabel >نام کالا :</InputLabel>
                    <TextField 
                        variant = "outlined"
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                        size="small"
                    />
                </Grid>
                
              
               <Grid item xs={12}>
               <InputLabel >دسته بندی:</InputLabel>
                    <DropDown
                        name="clothes"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        
                    />
                </Grid>

               <Grid item xs={12}>
                 
                    <InputLabel >توضیحات:</InputLabel>
                    <br/>
                    {/* <MUIRichTextEditor label="..." className={classes.text} defaultValue={description}  /> */}
                    <TextareaAutosize style={{ width:'80%',height:'100px',marginRight:'0.5rem'}} value={description} onChange={(e)=>setDescription(e.target.value)} />
                </Grid>
                <br/>
                <Grid>   
                    <InputLabel>تصویر کالا :</InputLabel>
                    <br/>
                    <ImageUpload 
                        handleImageSelect={handleImageSelect}
                        imageSrc={image}
                        setImageSrc={setImage}
                        style={{
                            background:'#03939d',
                            height:'70px',
                            width:'25rem',
                        }}
                        

                    />
                </Grid>
               
                <Grid item xs={6} >
                  <Button variant="contained"  className={classes.button}  type="submit" >ذخیره</Button>
                </Grid>

            </Grid>
            
        </form>
      
        
    )
}

export default Form

