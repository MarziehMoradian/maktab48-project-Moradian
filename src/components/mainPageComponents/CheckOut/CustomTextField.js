import React from 'react'
import { TextField,Grid } from '@material-ui/core';
import { useFormContext,Controller } from 'react-hook-form';
const CustomTextField = ({name,lable,required}) => {
    const {control} = useFormContext()
    const input = (props) => {
        return(
            <TextField variant="outlined" fullWidth size="small" />
        )
    }
    return (
        <Grid item xs={12} sm={12}>
            <Controller
                as={input}
                control={control}
                fullWidth
                name={name}
                label={lable}
                required={required}
                

            />

            
            
        </Grid>
    )
}

export default CustomTextField
