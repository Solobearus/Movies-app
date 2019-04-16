import React, { Component } from 'react';
// import logo from '../Images/logo.svg';
import style from './App.module.css';
import Container from '../Container/Container.jsx';
// import TableMovies from '../../Containers/TableMovies.jsx'
// import VisibleTodoList from '../../Containers/VisibleTodoList/VisibleTodoList.jsx'

// import { SET_MOVIES } from '../../Redux/actions'

class App extends Component {

  render() {
    return (
      <div className={style.App}>
        <Container />
      </div>
    );
  }
}

export default App;
