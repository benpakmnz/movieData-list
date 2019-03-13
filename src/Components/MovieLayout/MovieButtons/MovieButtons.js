import React from 'react';
import './MovieButtons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieButtons = (props) => (
   <div className="movieButtonsContainer" style={{display: props.displayMode}}>
       <button className="editMovieButton" 
               onClick = {props.clickedEdit}>
               <FontAwesomeIcon className="imageIcon" icon="pen"/>Edit
               </button>
       <button className="removeMovieButton" 
                onClick = {props.clickedDelete}>
                <FontAwesomeIcon className="imageIcon" icon="trash"/>Delete
                </button>
   </div> 
)

export default MovieButtons;