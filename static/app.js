import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';

import { authLogoutAndRedirect } from './actions/auth';

class App extends React.Component {

    static propTypes = {
        isAuthenticated: React.PropTypes.bool.isRequired,
        children: React.PropTypes.shape().isRequired,
        dispatch: React.PropTypes.func.isRequired,
        pathName: React.PropTypes.string.isRequired,
        user:     React.PropTypes.object.isRequired
    };

    logout = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    goToIndex = () => {
        this.props.dispatch(push('/'));
    };

    render() {
        const homeClass = classNames({
            active: this.props.pathName === '/'
        });
        const loginClass = classNames({
            active: this.props.pathName === '/login'
        });
        const registerClass = classNames({
            active: this.props.pathName === '/register'
        });

        return (
            <div className="app">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#top-navbar"
                                    aria-expanded="false"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <a className="navbar-brand" tabIndex="0" onClick={this.goToIndex}>
                                Calorie Tracker
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="top-navbar">
                            {this.props.isAuthenticated ?
                                <ul className="nav navbar-nav navbar-right">
                                    <li className={homeClass}>
                                        <a tabIndex="0" onClick={this.goToIndex}>
                                            <i className="fa fa-home"/> Home
                                        </a>
                                    </li>
                                    <li>
                                        <a className="js-logout-button" tabIndex="0" onClick={this.logout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                                :
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className={loginClass}>
                                            <Link className="js-login-button" to="/login">Login</Link>
                                        </li>
                                        <li className={registerClass}>
                                            <Link className="js-login-button" to="/register">Register</Link>
                                        </li>
                                    </ul>
                            }
                        </div>
                    </div>
                </nav>

                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user, 
        pathName: ownProps.location.pathname
    };
};

export default connect(mapStateToProps)(App);
export { App as AppNotConnected };
