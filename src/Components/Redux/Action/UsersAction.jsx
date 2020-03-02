import {FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED} from'./types'

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
})

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})
export const fetchUsersFailed = () => ({
    type: FETCH_USERS_FAILED
})


