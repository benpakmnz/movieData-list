import React, { Component } from 'react';
import './MovieForm.scss';
import { connect } from 'react-redux';



class EditMovieForm extends Component {
    constructor(props) {
        super(props)
        this.title = React.createRef()
        this.year = React.createRef()
        this.genere = React.createRef()
        this.runtime = React.createRef()
        this.director = React.createRef()
    
    }
    
    render(){
        console.log(this.props.selectedMovieData)
        console.log(this.title)
        return (
            <div className = "formLayout">
                <img src={this.props.selectedMovieData.Poster} alt={this.props.selectedMovieData.Title}/>
                <form>
                    <div>
                    <p>* movie Title</p>
                    <input label = "Title" defaultValue = {this.props.selectedMovieData.Title} ref={this.title} placeholder="please type movie title" />
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
                    <input label = "Genere" defaultValue = {this.props.selectedMovieData.Genre} ref={this.genere} placeholder="movie genere"/>
                    </div>
                    <div>
                    <p>* Director</p>
                    <input label = "Director" defaultValue = {this.props.selectedMovieData.Director} ref={this.director} placeholder="name of the movie director"/>
                    </div>
                    <div>
                        <button>Submit changes</button>
                        <button>cancel</button>
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
