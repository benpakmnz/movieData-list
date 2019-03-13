import React from 'react';
import './MovieLayout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddNewMovie = (props) => (
//  <div className="movieLayout" onClick={props.formOpen}> 
//        <div className="posterContainer">
//         <FontAwesomeIcon className="addMovieIcon" icon="plus"/>
//        </div>
//        <div className="movieData">
//             <div className="movieTitle newMovieTitle">Add new movie</div>
//        </div>
//    </div>

<div className="addMovieLayout" onClick={props.formOpen}>
    <FontAwesomeIcon className="addMovieIcon" icon="plus"/>
    <div className="newMovieTitle">Add new movie</div>
</div>
)



export default AddNewMovie