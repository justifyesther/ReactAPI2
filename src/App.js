import React, { Component } from 'react';
import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { Route } from 'react-router-dom';
import VerificationPage from './components/VerificationPage';
import VerifiedPage from './components/VerifiedPage';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage navBrand={'KenyanginAja'}/>

        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/waitingverification" component={VerificationPage} />
            <Route path="/verified" component={VerifiedPage} />
            <Route path="/userList" component={UserList} />
        </div>
      </div>
    );
  }
}

export default App;
