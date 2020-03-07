import {fetchUsersSuccess, editUserSuccess} from '../Action/UsersAction'
import Axios from 'axios'


export function fetchUsers() {
    return dispatch => {

        let arr=[
            {id:0,name:"sdsadsad",email:"sdsdsds"},
            {id:1,name:"sdsadsad",email:"sdsdsds"},
            {id:2,name:"sdsadsad",email:"sdsdsds"},
            {id:3,name:"sdsadsad",email:"sdsdsds"},
            {id:4,name:"sdsadsad",email:"sdsdsds"},
            {id:5,name:"sdsadsad",email:"sdsdsds"},
            {id:6,name:"sdsadsad",email:"sdsdsds"},
            {id:7,name:"sdsadsad",email:"sdsdsds"},
            {id:8,name:"sdsadsad",email:"sdsdsds"},
            {id:9,name:"sdsadsad",email:"sdsdsds"},
            {id:10,name:"sdsadsad",email:"sdsdsds"},
            {id:11,name:"sdsadsad",email:"sdsdsds"},
            {id:12,name:"sdsadsad",email:"sdsdsds"},
            {id:13,name:"sdsadsad",email:"sdsdsds"},
            {id:14,name:"sdsadsad",email:"sdsdsds"},
            {id:15,name:"sdsadsad",email:"sdsdsds"}
        ]

        dispatch(fetchUsersSuccess(arr))

        // let url = 'https://jsonplaceholder.typicode.com/users/'
        // Axios.get(url, {
        //     headers: {
        //         "Content-type": "application/json"
        //     }
        // }).then(response => {
        //     console.log("redux Response ya batta",response.data)
        //     return response.users;
        // })
    }
}

export function editUser(user) {
    console.log("new", user)
    return dispatch => {
        dispatch(editUserSuccess(user))
    }
}


/* FETCH USER */ 
export async function fetchUser(id) {
 const response = await Axios.get('https://jsonplaceholder.typicode.com/users/'+id)
 return response;

}