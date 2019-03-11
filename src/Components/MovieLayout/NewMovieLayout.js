import React from 'react';
import './MovieLayout.scss'


const AddNewMovie = (props) => (
   <div className="movieLayout" onClick={props.formOpen}>
       <div className="posterContainer"></div>
       <div className="movieData">
            <div className="movieTitle newMovieTitle">Add new movie</div>
       </div>
   </div>
)



export default AddNewMovie