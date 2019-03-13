import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/actions/index';

import './MoviesContainer.scss';
import MovieLayout from '../MovieLayout/MovieLayout';
import EditMovieForm from '../Forms/EditMovieForm';
import Modal from '../UI/Modal/Modal';
import NewMovieLayout from '../MovieLayout/NewMovieLayout';


class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            // formMode: false,
            selectedMovie: {},
            modalMode: false,
            modalType: '',
            movieToDelete: {}
        }
    }

    componentDidMount() {
        this.props.setMovieList()
        // this.setState({modalType: ''})
        
    }

    formEditOpen = (movieId) => {
        this.setState({
            // formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
            selectedMovie: movieId,
            modalType: 'form'
        })
        console.log('selectedMovie: '+ this.state.selectedMovie)
        console.log('movieId: '+ movieId)
        
    }

    togglePopUp = () => {
        this.setState({
            // formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,

            // modalType: 'form'
        })
        this.props.clearFormErrors()
    }

    FormCancel = () => {
        this.setState({
            // formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
            modalType: ''
        })
        this.props.clearFormErrors()
    }

    onSubmitForm = (movieData) => {
        this.props.onSubmit(movieData)
        this.togglePopUp()
        this.props.clearFormErrors()
    }

    deleteApprovel = (movie) => {
        this.setState({
            modalMode: !this.state.modalMode,
            movieToDelete: movie,
            modalType: 'delete'
        })
        
    }

    deleteApproved = () => {
        this.setState({
            modalMode: !this.state.modalMode,
            modalType: ''
        });
        this.props.deleteMovie(this.state.movieToDelete.imdbID)
    }
          
    render(){
        console.log(this.props.moviesList)
        const moviesList = this.props.moviesList
        .map(movie => <MovieLayout 
                    key={movie.imdbID ? movie.imdbID : movie.Title} 
                    title={movie.Title} 
                    poster={movie.Poster} 
                    year={movie.Year} 
                    runtime={movie.Runtime} 
                    genre={movie.Genre} 
                    director={movie.Director}
                    formOpen={() => this.formEditOpen(movie)}
                    deleteMovie= {() => this.deleteApprovel(movie)}
                    />);  

        return(
            <div className="movieList">
                <NewMovieLayout formOpen={this.formEditOpen}/>
                {moviesList}
                <Modal modalOpen = {this.state.modalMode} modalClose= {this.togglePopUp}>

                        {this.state.modalType === 'form' ? <EditMovieForm selectedMovieData = {this.state.selectedMovie} 
                        onFormCancel = {this.FormCancel}/> : null}
                        {this.state.modalType === 'delete' ? 
                        <div>
                            <p>Are you sure you want to delete {this.state.movieToDelete.Title} ?</p>
                            <button onClick= {this.deleteApproved}>yep, please delete it for me</button>
                            <button onClick={this.togglePopUp}>ooooops</button>
                        </div>
                        : null}
                </Modal>
            </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            moviesList: state.moviesList.moviesDataList,
            
        };
    };

    const mapDispatchToProps = dispatch => {
        return{
            setMovieList: () => dispatch(actionCreators.initMovies()),
            deleteMovie: (movieId) => dispatch(actionCreators.deleteMovie(movieId)),
            clearFormErrors: () => dispatch(actionCreators.clearFormValidationErrors())
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Container);
