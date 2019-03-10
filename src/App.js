import React, { Component, Fragment } from 'react';
import './App.css';
import MoviesContainer from './Components/MoviesContainer/MoviesContainer';


class App extends Component {
  render() {
    return (
      <Fragment>
        <MoviesContainer></MoviesContainer>
      </Fragment>
    );
  }
}

export default App;
