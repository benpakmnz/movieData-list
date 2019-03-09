import React from 'react';
import './MovieButtons.scss';

const MovieButtons = (props) => (
   <div className="movieButtonsContainer" style={{display: props.displayMode}}>
       <button>Edit</button>
       <button>Delete</button>
       <p>{props.name}</p>
   </div> 
)

export default MovieButtons;