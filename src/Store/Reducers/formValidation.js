import * as actionTypes from '../actions/actionTypes';

const initialState = {
    errors: {
        Title: '',
        Year: '',
        Genre: '',
        Runtime: '',
        Director: '',
       
    }
};

const formValidationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FORMERROR:
            return {
                ...state,
                errors: action.payload
            }
        case actionTypes.CLEARFORMERROR:
            return {
                ...state,
                errors: {
                    Title: '',
                    Year: '',
                    Genre: '',
                    Runtime: '',
                    Director: '',
                }
            }
        default:
        return state;
        }
    }

export default formValidationReducer;