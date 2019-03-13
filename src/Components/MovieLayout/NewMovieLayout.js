import React from 'react';
import './MovieLayout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AddNewMovie = (props) => (
 <div className="addMovieLayout" onClick={props.formOpen}> 
         <div className="posterContainer">
        <FontAwesomeIcon className="addMovieIcon" icon="plus"/>
          </div>
            <div className="newMovieTitle">Add new movie</div>
            <div className="NewMovieTitleMobile">Add new movie</div>
   </div>
)
export default AddNewMovie
