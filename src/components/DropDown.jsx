import { FormControl,InputLable, Select ,MenuItem} from '@material-ui/core';
import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';

 function DropDown(props) {
    const {name, value, onChange,className,lable} = props;
  
    const [options,setOptions]=useState([
        {id:'1',title: 'پوشاک زنانه'},
        {id:'2',title: ' پوشاک مردانه '},
        {id:'3',title: 'پوشاک بچگانه'}
    ])
     return (
         <div>
             <FormControl
             variant="outlined" size="small"
             className={className} >
                 <InputLabel id="demo-simple-select-label" >{lable}</InputLabel>
                 <Select
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={setOptions}
                    
                   
                 >
                   
                     {
                         options.map(
                             item => (<MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>)
                         )
                     }
                 </Select>

             </FormControl>
             
         </div>
     )
 }
 
 export default DropDown




// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SimpleSelect({onChange,value}) {
//   const classes = useStyles();
//   const [category,setCategory] = useState('')
//   const categories=([
//       {
//         id:1,
//         title:'پوشاک زنانه'
//       },
//       {
//         id:2,
//         title:'پوشاک مردانه'
//       },
//       {
//         id:3,
//         title:'پوشاک بچگانه'
//       }
//   ])
//   const handleChange = (event) => {
//     setCategory(event.target.value);
//     onChange();
//   };
//   return (
//     <div>
      
   
//       <FormControl className={classes.formControl} variant="outlined" size="small">
//         <Select
//           value={value}
//           onChange={handleChange}
//           displayEmpty
//           className={classes.selectEmpty}
//           inputProps={{ 'aria-label': 'Without label' }}
//           options={setCategory}
//         >
//           <MenuItem value="">
//             <em></em>
//           </MenuItem>
//           {categories.map((categor) => {
//               <MenuItem key={categor.id}>{categor.title}</MenuItem>
//               console.log(categor.title)
//           })}
          
//         </Select>
        
//       </FormControl>
     
//     </div>
//   );
// }

 