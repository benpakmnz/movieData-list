import React, { Component } from 'react';
import './MovieForm.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/actions/index';
import { formValidator } from '../../validations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../MovieLayout/MovieLayout.scss';

class EditMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            stateEerrors: {}
        }

        this.title = React.createRef()
        this.year = React.createRef()
        this.genre = React.createRef()
        this.runtime = React.createRef()
        this.director = React.createRef()
    }

    onSubmit = (event) => {
        event.preventDefault()
        let movieData = {
            Title: this.title.current.value,
            Year: this.year.current.value,
            Genre: this.genre.current.value,
            Runtime: this.runtime.current.value,
            Director: this.director.current.value,
            imdbID: this.props.selectedMovieData.imdbID,
            Poster: this.props.selectedMovieData.Poster
            
        }

        if(this.props.selectedMovieData.imdbID){
            this.props.onSubmitEditMovie(movieData)
        }else{
            this.props.onSubmitNewMovie(movieData)
        }
    
        this.props.onFormCancel() 
    }


    formValidation = (event, validate) => {
        event.preventDefault()
        if(!validate)
        {this.onSubmit(event)
           }else{
                let movieUpdatedData = {
                    Title: this.title.current.value,
                    Year: this.year.current.value,
                    Genre: this.genre.current.value,
                    Runtime: this.runtime.current.value,
                    Director: this.director.current.value,
                    imdbID: this.props.selectedMovieData.imdbID
                }
                console.log('movieUpdatedData: '+ JSON.stringify(movieUpdatedData))

                let errors = formValidator(movieUpdatedData, this.props.moviesList)
                this.setState({
                    stateEerrors: errors
                })
                console.log('stateErrors: ' + JSON.stringify(this.state.errors))
                this.props.validateForm(errors)
                if(Object.keys(errors).length === 0){
                     this.onSubmit(event)
                }
            }
        }  


    render(){
        return (
            <div className = "formLayout">
                
                {this.props.selectedMovieData.Poster ? 
                <img className="formPoster" src={this.props.selectedMovieData.Poster} alt={this.props.selectedMovieData.Title}/> : 
                    <div className="formPoster">
                    <FontAwesomeIcon className="imageIcons" icon="image"/>
                    </div>} 
                <form>
                    <div>
                        <p>* movie Title: 
                            <span>{this.props.errors.Title}</span>
                        </p>
                        <input 
                            label = "Title" 
                            defaultValue = {this.props.selectedMovieData.Title} 
                            ref={this.title} 
                            placeholder="please type movie title"
                            />
                    </div>
                    <div>
                        <p>* Year Realsed:
                             <span>{this.props.errors.Year}</span>
                        </p>
                        <input 
                            label = "Year" 
                            defaultValue = {this.props.selectedMovieData.Year} 
                            ref={this.year} 
                            placeholder="Years in numbers"/>
                    </div>
                    <div>
                        <p>* Run Time:
                            <span>{this.props.errors.Runtime}</span>
                        </p>
                        <input 
                            label = "RunTime" 
                            defaultValue = {this.props.selectedMovieData.Runtime} 
                            ref={this.runtime} 
                            placeholder="Runtime in numbers"/>
                    </div>
                    <div>
                        <p>* Genere:
                             <span>{this.props.errors.Genre}</span>
                        </p>
                        <input 
                            label = "Genere" 
                            defaultValue = {this.props.selectedMovieData.Genre} 
                            ref={this.genre} 
                            placeholder="movie genere"/>
                    </div>
                    <div>
                        <p>* Director:
                        <span>{this.props.errors.Director}</span>
                        </p>
                        <input 
                            label = "Director" 
                            defaultValue = {this.props.selectedMovieData.Director} 
                            ref={this.director} 
                            placeholder="name of the movie director"/>
                    <div className="formButtons">
                        <button onClick = {event => this.formValidation(event, true)}>
                        <FontAwesomeIcon icon="check"></FontAwesomeIcon> Submit changes
                        </button>
                        <p className ="cancelButton" 
                           onClick = {this.props.onFormCancel}>cancel</p>
                    </div>
                    </div>

                </form>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
     moviesList: state.moviesList.moviesDataList,
     errors: state.formValidation.errors
    } 
 }

 const mapDispatchToProps = dispatch => {
     return {
         validateForm: (data) => dispatch(actionCreators.formValidationErrors(data)),
         onSubmitEditMovie: (movieData) => dispatch(actionCreators.editMovieSubmit(movieData)),
         onSubmitNewMovie: (movieData) => dispatch(actionCreators.addMovieSubmit(movieData)),
         
        }
 }

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);
