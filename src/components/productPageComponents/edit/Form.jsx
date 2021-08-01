import { TextField, Grid, makeStyles, Button, InputLabel } from '@material-ui/core'
import React,{useState} from 'react'
import DropDown from '../DropDown';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts,editeProduct } from '../../../redux/actions/productActions';
import {updateProduct} from '../../../api/products'
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
        background:'#0f6c40',
        color:'white',
        width:'50%',
        // padding:'10px 30px',
        [theme.breakpoints.only(325)]:{
     
            margin: theme.spacing(2,0),
          },
        
        [theme.breakpoints.up('xs')]:{
     
            // margin:'auto',
            margin: theme.spacing(2,10),


          },
        
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
function Form({action}) {
    const classes = useStyle();
    const [title,setTitle] = useState(action.title);
    const [description,setDescription] = useState(action.description)
    const [category,setCategory] = useState(action.category);
    // const [price,setPrice] = useState(action.price);
    const [image, setImage] = useState(action.image)
 
    // const handleImageSelect = (e) => {
    //   setImage(URL.createObjectURL(e.target.files[0]))
    // }
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.allProducts.products);

    const handleSubmit = (e) => {
        e.preventDefault();
        let product = {
            "id":action.id,
            "title":title, 
            "category":category,
            "image":image,
          }
          updateProduct(product)
        // let id = Math.floor(Math.random()*100)
        // //addItem
        // addItem({name, categoury, text})
        // setName("");
        // setCategoury("");
        // setText("");
        dispatch(editeProduct({product}));
        // dispatch(getProducts());
        dispatch(getProducts());
        window.location.reload()
        setTitle("");
        setCategory();
        setDescription("")
        
        
    }
  
    const onImageChange=(event)=>{
        if (event.target.files&& event.target.files[0]) {
          let img = event.target.files[0];
          setImage(URL.createObjectURL(img))
        }
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
                     <img src={image} alt="" style={{width:'200px',height:'200px'}}/>
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

