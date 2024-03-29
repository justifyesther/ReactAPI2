import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { onUserRegister } from '../actions'

class RegisterPage extends Component {

    onBtnRegisterClick = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var phone = this.refs.phone.value;
        var password = this.refs.password.value;

        this.props.onUserRegister({ username, email, password, phone });
    }

    renderError = () => {
        if(this.props.error.length > 0) {
            return <p className="alert alert-danger">{this.props.error}</p>;
        }
    }

    renderButton = () => {
        if(this.props.loading) {
            return <i className="fa fa-spinner fa-spin" style={{ fontSize: '54px' }}/>
        }
        return <input type="button" name="submit" id="submit" className="submit" defaultValue="Register" onClick={this.onBtnRegisterClick} />
    }

    render() {
        if(this.props.username === '') {
            return (
                <div className="bodyRegister">
                    <div className="main">
                        <div className="container">
                            <form className="appointment-form" id="appointment-form">
                                <h2>Selamat Datang di KenyanginAja</h2>
                                <div className="form-group-1">
                                    <input ref="username" type="text" name="name" id="name" placeholder="Username" required />
                                    <input ref="email" type="email" name="email" id="email" placeholder="Email" required />
                                    <input ref="phone" type="number" name="phone_number" id="phone_number" placeholder="Phone number" required />
                                    <input ref="password" type="text" name="password" id="password" placeholder="Password" required />
                                </div>
                                <div>
                                    {this.renderError()}
                                </div>
                                <div className="form-submit">
                                    {this.renderButton()}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        
        return <Redirect to='/waitingverification'/>
    }
}

const mapStateToProps = (state) => {
    return { username: state.auth.username, loading: state.auth.loading, error: state.auth.error };
}

export default connect(mapStateToProps, {onUserRegister})(RegisterPage);