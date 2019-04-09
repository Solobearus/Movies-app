import React from 'react'
import style from './Table.module.css'
import TableHeader from './TableHeader/TableHeader.jsx'
import Item from './Item/Item.jsx'

const Table = (props) => {

    let items = (props.movies || []).map(movie => <Item edit={props.edit} delete={props.delete} movie={movie}></Item>);
    return (
        <div className={ style.Table }>
            <TableHeader></TableHeader>
            {(props.movies || []).map(
                movie => <Item 
                            key={movie.id}
                            Edit={props.Edit}
                            Delete={props.Delete}>
                            movie={movie}>
                        </Item>
            )}
        </div>
    )
}

export default Table
