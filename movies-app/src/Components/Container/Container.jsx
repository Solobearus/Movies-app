import React from 'react'
import style from './Container.module.css'
import TableMovies from '../../Containers/TableMovies'
import Modal from '../Modal/Modal.jsx'

const Container = (props) => {

    const title = "Movies";

    

    return (
        <div className={style.Container}>
            <h1>★ ★ ★ {title} ★ ★ ★</h1>
            <br />
            <TableMovies />
            <br />
            Application made by Ivan Solobear | Photo by Tyler Callahan on Unsplash
        </div>
    )
}

export default Container
