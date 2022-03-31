import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
// import authHeader from "../services/auth-header";
// import userService from "../services/user.service";
import AuthService from "../services/auth.service";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  
    console.log('log z board-admin.component.js');
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser(); 

     if (!currentUser) this.setState({ redirect: "/home" });    /// tu można to zmienić w wolnej chwili
     this.setState({ currentUser: currentUser, userReady: true }) 

    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 403) {
          console.log('dupa');
          EventBus.dispatch("logout");
        }
      }
    );
  }

 
  // const loggedIn = 
  //   JSON.parse(localStorage.getItem('user'))
  //   .user
  //   .map(user => user.roles)
  
  // console.log (loggedIn);
//  dupa (){
    
//  var userStorage = localStorage.getItem('user');
//  Object.entries(localStorage).map(([key, value]) => {
//    const user = JSON.parse(value);
//    console.log('cokolwiek');
// })}
 

render() {
    
  if (this.state.redirect) {
    return (
      <div className="container">
        <header className="jumbotron">
        <h3>{this.state.content}</h3>
        </header>
        </div>
    )
  }
    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
          <h3>{this.state.content}</h3>
          </h3>
        </header>
      
        {currentUser.roles == 'ROLE_ADMIN' &&
      <a href="/registerModerator" class="btn btn-primary">rejestruj moderatora</a>
    }
      </div>: null}
      </div>
    );
}
}