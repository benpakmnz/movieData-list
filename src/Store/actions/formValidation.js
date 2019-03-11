import * as actionTypes from './actionTypes';

export const formValidationErrors = (payload) => {
    return {
        type: actionTypes.FORM_ERROR,
        payload
        
    }
}

export const clearFormValidationErrors = () => {
    return {
        type: actionTypes.CLEAR_FORM_ERROR
        
    }
}