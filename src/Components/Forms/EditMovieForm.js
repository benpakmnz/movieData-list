import React, { Component } from 'react';
import './MovieForm.scss';


class EditMovieForm extends Component {
    render(){
        return (
            <div className = "formLayout">
                <img src="https://cdn.europosters.eu/image/750/posters/justice-league-superman-i51000.jpg" alt="dog day afternoon"/>
                <form>
                    <div>
                    <p>* movie Title</p>
                    <input label = "Title" placeholder="please type movie title" value="Dog Day Afternoon"/>
                    </div>
                    <div>
                    <p>* Year Realsed</p>
                    <input label = "Year" placeholder="Years in numbers" value="2000"/>
                    </div>
                    <div>
                    <p>* Run Time</p>
                    <input label = "RunTime" placeholder="Runtime in numbers" value="125min"/>
                    </div>
                    <div>
                    <p>* Genere</p>
                    <input label = "Genere" placeholder="movie genere" value="Biography, Crime, Drama"/>
                    </div>
                    <div>
                    <p>* Director</p>
                    <input label = "Director" placeholder="name of the movie director" value="Sidney Lumet"/>
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

export default EditMovieForm;
