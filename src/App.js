import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './Components/MoviesContainer/MoviesContainer';
import EditMovieForm from './Components/Forms/EditMovieForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesContainer></MoviesContainer>
        <EditMovieForm></EditMovieForm>
      </div>
    );
  }
}

export default App;
