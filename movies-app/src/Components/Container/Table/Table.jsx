import React, { Component } from 'react';
import style from './Table.module.css'
import TableHeader from './TableHeader/TableHeader.jsx'
import Item from './Item/Item.jsx'

class Table extends Component {

    // const store = window.store;
    // const movies = store.getState().items;
    // console.log(movies);

    componentDidMount() {
        this.props.setMovies();
    }
    render() {
        return (
            < div className={style.Table} >
                <TableHeader></TableHeader>
                {
                    (this.props.movies || []).map(
                        (movie) => {
                            return <Item
                                movie={movie}>
                            </Item>
                        }
                    )
                }
            </div >
        )

    }
}

export default Table
