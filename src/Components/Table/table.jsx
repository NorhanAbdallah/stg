import React from 'react'
import {fetchUsers} from '../Redux/Reducers/fetchUsers'
import {connect} from 'react-redux'


class tableData extends React.Component{
    componentDidMount () {
        this.props.dispatch(fetchUsers())
    }
    render() {
        return (
            <div className="table">
{this.props.users}
            </div>
        )
    }
}

const mapStateToProps = state => (
{    users: state.users
}  )

export default connect(mapStateToProps)(tableData)  