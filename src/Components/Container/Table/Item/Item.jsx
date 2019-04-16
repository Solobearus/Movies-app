import React from 'react'
import style from './Item.module.css'
import Modal from '../../../Modal/Modal.jsx'

const Item = (props) => {

    let modals = null;
    if (!props.header) {
        modals = <React.Fragment>
            <Modal movie={props.movie} click={props.updateMovie} value='Edit'></Modal>
            <Modal movie={props.movie} click={props.deleteMovie} value='Delete'></Modal>
        </React.Fragment>
    }

    return (
        <div className={style.Item}>
            <p>{props.movie.imdbID}</p>
            <p>{(props.movie.Title).toLowerCase()           //lowercase everything to remove unwanted uppercase letters in middle of words
                                    .match(/([a-z\s])+/g)   //clear the unwanted characters
                                    .join('')               //now we need to join to get words seperated by space
                                    .split(' ')             //split words on space
                                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)) //make sure every word is now uppercased in the first letter
                                    .join(' ')              //now we join all words to have full name
                                    }</p>         
            <p>{props.movie.Year}</p>
            <p>{props.movie.Runtime}</p>
            <p>{props.movie.Genre}</p>
            <p>{props.movie.Director}</p>

            {modals}
        </div>
    )
}

export default Item
