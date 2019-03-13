import React, { Component, Fragment } from 'react';
import './App.css';
import './Utility/fontAwesome';
import MoviesContainer from './Components/MoviesContainer/MoviesContainer';
import Header from './Components/Header/Header';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <MoviesContainer></MoviesContainer>
      </Fragment>
    );
  }
}

export default App;
