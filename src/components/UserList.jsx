import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    state = { userList: [] }

    componentDidMount() {
        const token = localStorage.getItem('token'); 
        //catatan : getItem --->> untuk mengambil data tokennya
        const headers = {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }

        axios.get('http://localhost: 2000/admin/getuserList', headers)
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log('GAGAL')
                console.log(err.response)
            })
    }

    renderUserList = () => {
        var listJSX = this.state.userList.map((item) => {
            return(
                <div>
                    <h4>Username : {item.username}</h4>
                    <h4>Email : {item.email}</h4>
                    <h4>Role : {item.role}</h4>
                    <h4>Status : {item.status}</h4>
                    <h4>Last Login : {item.lastLogin.toString()}</h4>
                </div>
            )
        })
        return listJSX;
    }
    render() {
        return (
            <div></div>
        )
    }
}

export default UserList