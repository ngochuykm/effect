import * as types from '../constant'
export function setPage(payload){
    return ({
        type: types.SET_PAGE,
        payload
    })
}