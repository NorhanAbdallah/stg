import {fetchUsersBegin, fetchUsersSuccess, fetchUsersFailed} from '../Action/UsersAction'
import Axios from 'axios'


export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin())
        let url = 'https://jsonplaceholder.typicode.com//users'
        Axios.get(url, {
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            dispatch(fetchUsersSuccess(response.users))
            console.log("redux Response ya batta",response)
            return response.users;
        }).catch(error => dispatch(fetchUsersFailed()) && console.log("ReduxError", error))
    }
}
