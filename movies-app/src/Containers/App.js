import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import style from './App.module.css';
import Container from '../Components/Container/Container.jsx';

class App extends Component {

  constructor(){
    super(props);
    this.state = {
      isLoaded:false,
      items:false,
    };
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?s=train&type=movie&page=1&apikey=5ee16e9`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  //CRUD functions

  Add(item) {
    items.Push(item);
  }

  Edit(item) {
    let newitems = [...this.state.items];
    newitems[item.id] = item; //FIXME: if id isnt the array index , fix it .
    this.setState({items : newitems});
  }

  Delete(id) {
    let newitems = [...this.state.items];
    newitems.splice(id, 1);
    this.setState({items : newitems});
  }

  render() {
    return (
      <div className={style.App}>
        <Container movies={props.movies}
                  Add={props.Add}
                  Edit={props.Edit}
                  Delete={props.Delete}>
        </Container>
      </div>
    );
  }
}

export default App;
