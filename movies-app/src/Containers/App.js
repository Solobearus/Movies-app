import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.App_header}>
          <img src={logo} className={style.App_logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.App_link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;