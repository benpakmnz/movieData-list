import React, { Component } from 'react';
import './MovieForm.scss';
import { connect } from 'react-redux';



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
        this.props.handleSubmit(movieData)
        
    }

    
    
    render(){
        return (
            <div className = "formLayout">
                <img src={this.props.selectedMovieData.Poster} alt={this.props.selectedMovieData.Title}/>
                <form>
                    <div>
                        <p>* movie Title</p>
                        <input 
                            label = "Title" 
                            defaultValue = {this.props.selectedMovieData.Title} 
                            ref={this.title} 
                            placeholder="please type movie title"
                            />
                    </div>
                    <div>
                        <p>* Year Realsed</p>
                        <input label = "Year" defaultValue = {this.props.selectedMovieData.Year} ref={this.year} placeholder="Years in numbers"/>
                    </div>
                    <div>
                        <p>* Run Time</p>
                        <input label = "RunTime" defaultValue = {this.props.selectedMovieData.Runtime} ref={this.runtime} placeholder="Runtime in numbers"/>
                    </div>
                    <div>
                        <p>* Genere</p>
                        <input label = "Genere" defaultValue = {this.props.selectedMovieData.Genre} ref={this.genre} placeholder="movie genere"/>
                    </div>
                    <div>
                        <p>* Director</p>
                        <input label = "Director" defaultValue = {this.props.selectedMovieData.Director} ref={this.director} placeholder="name of the movie director"/>
                    </div>
                    <div>
                        <button onClick = { event => this.onSubmit(event) }>Submit changes</button>
                        <button onClick = { this.props.cancelFormEdit }>cancel</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
     moviesList: state.moviesList.moviesDataList 
    } 

 }

export default connect(mapStateToProps)(EditMovieForm);
