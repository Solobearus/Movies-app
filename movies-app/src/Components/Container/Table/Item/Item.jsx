import React from 'react'
import style from './Item.module.css'
import Button from '../../../Button/Button.jsx'
import Modal from '../../../Modal/Modal.jsx'

const Item = (props) => {
    return (
        <div className={ style.Item }>
            <p>{props.movie.imdbID}</p>
            <p>{props.movie.Title}</p>
            <p>{props.movie.Year}</p>
            <p>{props.movie.Runtime}</p>
            <p>{props.movie.Genre}</p>
            <p>{props.movie.Director}</p>

            <Modal movie={props.movie} value='Edit'></Modal>
            <Modal movie={props.movie} value='Delete'></Modal>
        </div>
    )
}

export default Item
