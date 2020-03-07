import React from 'react'
import {fetchUser} from '../Redux/Reducers/fetchUsers'
import {Row, Col} from 'antd';

class userPage extends React.Component {
    state = {
        user: {}
    }
    componentDidMount = () => {
        const id = this.props.match.params.id;
        fetchUser(id).then(response => this.setState({user: response.data})).catch(error => console.log("user fetch error:", error))
    }

    render() {
        return (
            <section id="user-section">
                {console.log(this.props)}
                <Row>
                    <Col offset={1}>
                    <div className="userTitle">
                        User:
                    </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userName">
                            {
                            this.state.user.name
                        } </div>
                    </Col>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userEmail">
                            {
                            this.state.user.email
                        } </div>
                    </Col>
                    <Col xs={24}
                        sm={24}
                        md={8}
                        lg={8}
                        xl={8}>
                        <div className="userAddress">
                            {
                            this.state.user.phone
                        } </div>
                    </Col>
                </Row>
            </section>
        )
    }
}
export default userPage;
