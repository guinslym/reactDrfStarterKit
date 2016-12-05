import React from 'react';
import { connect } from 'react-redux';

class HomeView extends React.Component {

 static propTypes = {
    token: React.PropTypes.string.isRequired,
    user: React.PropTypes.object.isRequired
    }

render() {
    return (
        <div className="container">
            Hello, World!
        </div>                
        )
    }
}

const mapStateToProps = state => {
    return {
    token: state.auth.token,
    user: state.auth.user
    }
}

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };