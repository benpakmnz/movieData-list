import React, { Component } from 'react';
import './MovieForm.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/actions/index';
import { formValidator } from '../../validations'

class EditMovieForm extends Component {
    constructor(props) {
        super(props);
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
        this.handleSubmitType(movieData)
        this.props.onFormCancel() 
    }

    handleSubmitType = (movieData) => {
        console.log(this.props.selectedMovieData)
        if(this.props.selectedMovieData.key){
            this.props.handleEditMovieSubmit(movieData)
        }else{
            this.props.handleAddMovieSubmit(movieData)
        }
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
                }
                let errors = formValidator(movieUpdatedData)
                this.props.validateForm(errors)
                if(Object.keys(this.props.errors).length === 0 ) this.onSubmit(event)
                }
            }
        


    render(){
        return (
            <div className = "formLayout">
                <img src={this.props.selectedMovieData.Poster} alt={this.props.selectedMovieData.Title}/>
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
                    </div>
                    <div>
                        <button onClick = {event => this.formValidation(event, true)}>Submit changes</button>
                        <button onClick = {this.props.onFormCancel}>cancel</button>
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
         validateForm: (data) => dispatch(actionCreators.formValidationErrors(data))
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieForm);
