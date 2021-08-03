import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AiOutlineSearch } from "react-icons/ai";
const useStyles = makeStyles((theme)=>({
    input:{
        width: '30%',
        height:'37px',
        borderRadius:'5px',
        marginTop: '7px',
        border:'none',
        outline:'none',
        fontSize:'18px',
        marginRight: '5%',
        position:'relative',
        [theme.breakpoints.down('xs')]:{
            width:'70%',
            marginTop: '8px',
            marginRight: '0'
        },
      
    },
    icone:{
        position:'absolute',
        marginTop: '15px',
        // marginLeft: '20%',
        height:'20px',
        width: '40px',
        color:'white'
    }

   


}))
function Search({search,onSearch}) {
   const classes =useStyles()
    return (
        <div style={{position: 'relative'}}>
            <input type="text"
             className={classes.input}
            value={search}
            placeholder="جست و جو...."  
            onChange={(e)=>onSearch(e.target.value)}/>
            <AiOutlineSearch className={classes.icone}/>
        </div>
    )
}

export default Search
