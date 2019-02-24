import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { onUserVerified } from '../actions';

class VerifiedPage extends Component {

    state = { verified: false, loading: true}

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        var username = params.username;
        var password = params.password;
        axios.post('http://localhost:2000/auth/verified', { //ini req.body
            username,
            password
        }).then((res) => {
            const { token } = res.data;
            // localStorage.setItem("token", token || ""); //localStorage pengganti cookie
            localStorage.setItem("token", token); //udah pasti ada tokennya
            this.props.onUSerVerified(res.data);
            console.log(res.data)
            this.setState({ loading: false, verified: true })
        }).catch((err) => {
            console.log(err)
        })
    }

    //sesuai dengan state :
    renderContent = () => {
        if(this.state.verified && !this.state.loading) {
            return(
                <h1>Selamat Bergabung di KenyanginAja.com</h1>
            );
        }
        else if(!this.state.verified && !this.state.loading){
            return(
                <h1>Maaf, tolong reload lagi halaman ini</h1>
            );
        }
        return (
            <h1>Tunggu yaa...</h1>
        )

    }
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default connect(null, { onUserVerified }) (VerifiedPage);