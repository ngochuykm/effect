import * as types from '../constant'

const  DEFAULT_STATE = {
    page: ""
}

export default (state=DEFAULT_STATE,action) =>  {
    switch (action.type) {
        case types.SET_PAGE:
            return{ 
                ...state,
                page: action.payload
            } 
            break;
    
        default:
            return {...state}
            break;
    }
}