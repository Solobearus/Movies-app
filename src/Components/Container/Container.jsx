import React from 'react'
import style from './Container.module.css'
import TableMovies from '../../Containers/TableMovies'

const Container = (props) => {

    const title = "Movies";
    return (
        <div className={style.Container}>
            <h1>★ ★ ★ {title} ★ ★ ★</h1>
            <TableMovies />
            <p>Application made by <a href="https://github.com/Solobearus">Ivan Solobear</a> | Photo by Tyler Callahan on Unsplash</p>
        </div>
    )
}

export default Container
