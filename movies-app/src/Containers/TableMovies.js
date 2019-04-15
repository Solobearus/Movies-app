import { connect } from 'react-redux'
import { setMovie } from '../Redux/actions'
import { SET_MOVIES } from '../Redux/actions'
import Table from '../Components/Container/Table/Table.jsx'

const mapStateToProps = state => ({
  movies: state.items
});
const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: () => dispatch({
      type: SET_MOVIES
    })
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);