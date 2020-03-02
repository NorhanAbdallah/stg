import {FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED} from '../Action/types';

const initalState = {
    users: []
}

export default function userReducer (state = initalState , action) {
    switch(action.type){
        case FETCH_USERS_BEGIN:
            return {
                ...state
            }
        
        case FETCH_USERS_SUCCESS: 
            return {
                ...state,
                users: action.payload.users
            } 
            
        case FETCH_USERS_FAILED:
            return{
                ...state,
                users: []
            }   
        default:
            return state     
    }
}