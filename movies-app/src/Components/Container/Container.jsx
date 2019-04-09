import React from 'react'
import style from './Container.module.css'
import Table from './Table/Table.jsx'
import Button from '../Button/Button.jsx'
const Container = (props) => {
    return (
        <div className={ style.Container }>
            <h1>{props.title}</h1>
            <Table movies={props.movies}
                Edit={props.Edit}
                Delete={props.Delete}>
            </Table>
            <Button click={props.Add}></Button>
        </div>
    )
}

export default Container
 