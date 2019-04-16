import React, { Component } from 'react';
import style from './Table.module.css'
import TableHeader from './TableHeader/TableHeader.jsx'
import Item from './Item/Item.jsx'
import Modal from '../../Modal/Modal.jsx'

class Table extends Component {

    componentDidMount() {
        this.props.initMovies();
    }

    render() {
        return (
            < div className={style.Table} >
                <TableHeader></TableHeader>
                <Item 
                    movie={{
                        imdbID: "imdbID",
                        Title : "Title",
                        Year : "Year", 
                        Runtime : "Runtime", 
                        Genre : "Genre", 
                        Director : "Director"
                    }}
                    header= {true}></Item>
                {
                    (this.props.movies || []).map(
                        (movie) => {
                            return <Item
                                movie={movie}
                                updateMovie= {this.props.updateMovie}
                                deleteMovie= {this.props.deleteMovie}>
                            </Item>
                        }
                    )
                }
                <Modal click={this.props.addMovie} value='Add'></Modal>
            </div >
        )
    }
}

export default Table
