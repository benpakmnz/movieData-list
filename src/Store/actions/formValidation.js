import * as actionTypes from './actionTypes';

export const formValidationErrors = (payload) => {
    return {
        type: actionTypes.FORMERROR,
        payload
        
    }
}

export const clearFormValidationErrors = () => {
    return {
        type: actionTypes.CLEARFORMERROR,
        
    }
}