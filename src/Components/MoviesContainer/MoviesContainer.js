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
            formMode: false,
            selectedMovieId: '',
            modalMode: false,
            alertMessage: false,
            // idToDelete: ''
        }
    }

    componentDidMount() {
        this.props.setMovieList()
    }

    formEditOpen = (movieId) => {
        this.setState({
            formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
            selectedMovieId: movieId
        })
    }

    togglePopUp = () => {
        this.setState({
            formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
        })
    }

    FormCancel = () => {
        this.setState({
            formMode: !this.state.formMode,
            modalMode: !this.state.modalMode,
        })
        this.props.clearFormErrors()
    }

    onSubmitForm =(movieData) => {
        this.props.onSubmit(movieData)
        this.togglePopUp()

    }

    deleteApprovel = (id) => {
        this.setState({
            idToDelete: id,
            modalMode: !this.modalMode,
            alertMessage: !this.alertMessage
        })

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
                    deleteMovie= {() => this.props.deleteMovie(movie.imdbID)}
                    // deleteMovie= {() => this.deleteApprovel(movie.imdbID)}
                    />);  
        

        return(
            <div className="movieList">
                <NewMovieLayout formOpen={this.formEditOpen}/>
                {moviesList}
                <Modal modalOpen = {this.state.modalMode} modalClose= {this.togglePopUp}>
                        {this.state.formMode ? <EditMovieForm 
                        selectedMovieData = {this.state.selectedMovieId}
                        onFormCancel = {this.FormCancel} 
                        // handleEditMovieSubmit = {this.props.onSubmitEditMovie}
                        // handleAddMovieSubmit = {this.props.onSubmitNewMovie}
                        /> : null}

                        {/* {this.state.alertMessage ? 
                        <div>
                        <p>Are you sure you want to delete this movie ?</p>
                        <button onClick= {() => this.props.deleteMovie(this.state.idToDelete)}>yep, please delete it for me</button>
                        <button onClick={this.togglePopUp}>ooooops</button>
                        </div>
                        : null} */}
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
            // onSubmitEditMovie: (movieData) => dispatch(actionCreators.editMovieSubmit(movieData)),
            // onSubmitNewMovie: (movieData) => dispatch(actionCreators.addMovieSubmit(movieData)),
            deleteMovie: (movieId) => dispatch(actionCreators.deleteMovie(movieId)),
            clearFormErrors: () => dispatch(actionCreators.clearFormValidationErrors())
        }
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Container);
