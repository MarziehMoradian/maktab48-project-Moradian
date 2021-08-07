import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts} from '../../redux/actions/productActions';
import Products from '../../components/mainPageComponents/products/Products';
import Sidebar from './Sidbar';
import { Button,  Paper ,useTheme ,useMediaQuery,makeStyles} from '@material-ui/core';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

 const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
    },
    root2:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'cneter',
        justifyContent:'space-around'
        
    },
    sidbarInMobileSize:{
        width:'100%',
        height:'50px',
        backgroundColor:'yellowgreen',
        marginTop:'80px',
        display:'flex',
        flexDirection:'column',
        alignItems:'start',
        // position:'absolute',
        // zIndex:'1',
       

    },
    btn:{
        color:'white',
        fontSize:'18px'
    },
    paper:{
        width: '100%',
        background:'yellow',
        [theme.breakpoints.between(290,1400)]:{
            position: 'absolute',
            zIndex: 1,
            marginTop:'50px',


        }
      
    },
    sidbarInLaptop:{
        width:'20%',
      
        marginTop:'80px',
        background:'linear-gradient(to bottom,#effbf3,#f7fdf9,white)',
        borderLeft:'5px solid #1a6834',
        borderRadius:'12px 0 0 12px',
        [theme.breakpoints.between(290,1400)]:{
            

        }
    },
    main:{
        width:'100%',
        height:'100%'
    }
 }))



 const CategoryList = () => {
     const classes = useStyles()
    const {category} = useParams();
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.between(290,1400))
    
    const dispatch = useDispatch();
    const [isOpen,setIsOpen] = useState(false)
    const products = useSelector((state) => state.allProducts.products);
    let listItems=[]
    const handleOpen = () => {
        if(isOpen === false){

            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }
    useEffect(() => {
        dispatch(getProducts()); 
        
    },[]);
    products?.map((product) => {
        if(product.category === category){
          listItems.push(product)
        }
    })
    // const handleSearch = () => {
    //     const i = listItems?.filter((product)=> product.title === search)
        
    // }
    return (
         <div className={isMobile ? (classes.root2) : (classes.root)}>
           
        { isMobile ?   
                (
                <div className={classes.sidbarInMobileSize}>
               
                    <Button vatiant="text" onClick={handleOpen} className={classes.btn} >{!isOpen? <GiHamburgerMenu style={{color:'white',transitionDuration:'5ms'}}/>: <MdClose style={{color:'white', transition: 'color 8s linear 4s'}}/>}دسته بندی ها</Button>
                    {isOpen && <Paper className={classes.paper} onClick={()=>setIsOpen(false)}> <Sidebar/></Paper>}
                </div>
                ):
                (
                    // <div style={{display:'flex',flexDirection:'column',alignItems:'right'}}>
                    <div className={classes.sidbarInLaptop}>
                    
                      <Sidebar/>
                    </div>
                    // </div>

                )
                }
            
            <main className={classes.main}>
            <Products products={listItems} categoryName={category} num={listItems.length}/>
            </main>
        </div>
      
    )
}

export default CategoryList
