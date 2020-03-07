import {USERS_FETCH, USER_EDIT, USER_REMOVE} from '../Action/types';

const initalState = {
    list: []
   
}

export default function userReducer (state = initalState , action) {
    // console.log("ss",action.payload.users)
    console.log("ssdss",state)

    
    switch(action.type){

        case USERS_FETCH: 
            return {
                ...state,
                list: action.payload
            } 
            
        case USER_EDIT:
            return{
               ...state,
                list: action.payload.users
               
            }   
        case USER_REMOVE:
            return{
                ...state,
                list: []
            }   
        default:
            return state     
    }
}