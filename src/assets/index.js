import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inputs: {
      '& > *': {
        margin:'10px 0',
        color:'black'
      },
    },
  
}));

export const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '50rem', height: '25rem', margin: 'auto' },
    borderColor: 'text.primary',
  };

  