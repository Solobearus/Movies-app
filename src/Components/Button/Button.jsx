import React from 'react'
import Buttonui from '@material-ui/core/Button';

const Button = (props) => {
 
    return (
        <Buttonui onClick={() => {props.click(props.id)}} variant="contained" color="primary">
            {props.value}
        </Buttonui>
    )
}

export default Button
