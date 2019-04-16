import { connect } from 'react-redux'
import { addMovie, updateMovie, deleteMovie, initMovies } from '../Redux/actions'
import Table from '../Components/Container/Table/Table.jsx'

const mapStateToProps = state => ({
  movies: state.moviesReducer.items
});

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (payload) => dispatch(addMovie(payload)),
    updateMovie: (payload) => dispatch(updateMovie(payload)),
    deleteMovie: (payload) => dispatch(deleteMovie(payload)),
    initMovies: () => dispatch(initMovies())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);