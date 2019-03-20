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
        case actionTypes.FORM_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        case actionTypes.CLEAR_FORM_ERROR:
            return {
                ...state,
                errors: {}
            }
        default:
        return state;
        }
    }

export default formValidationReducer;