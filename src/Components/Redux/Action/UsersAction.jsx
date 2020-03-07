import {USERS_FETCH, USER_EDIT} from'./types'


export function fetchUsersSuccess  (users) {
    console.log("dkkkkkkkkkkkkkkkkkk", users)
    return {
    type: USERS_FETCH,
    payload: users
 }
}

export function editUserSuccess(users) {
    return {
        type: USER_EDIT,
        payload: {users}
     }
    
}

