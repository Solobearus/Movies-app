import React from 'react'
import style from './Container.module.css'
import TableMovies from '../../Containers/TableMovies'
import Modal from '../Modal/Modal.jsx'

const Container = (props) => {

    const title = "Movies";
    
    return (
        <div className={ style.Container }>
            <h1>{title}</h1>
            <TableMovies/>
            {/* <Modal value='add'/> */}
        </div>
    )
}

export default Container
 