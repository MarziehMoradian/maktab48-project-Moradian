import React from 'react'
import Button from '@material-ui/core/Button';
function ButtonModal({onClick,className}) {
    
    return (
        <div>
            <Button variant="outlined"  onClick={onClick} className={className} >
                افزودن کالا
            </Button>
            
        </div>
    )
}

export default ButtonModal
