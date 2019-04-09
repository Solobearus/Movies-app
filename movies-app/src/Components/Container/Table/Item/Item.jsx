import React from 'react'
import style from './Item.module.css'
import Button from '../../../Button/Button.jsx'

const Item = (props) => {
    
    console.log(props.movie);
    
    return (
        <div className={ style.Item }>
            test
            <Button key={props.key} value='edit' click={props.edit}></Button>
            <Button key={props.key} value='delete' click={props.delete}></Button>
        </div>
    )
}

export default Item
