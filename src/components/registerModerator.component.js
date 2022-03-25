
import React, { Component } from "react";
import Form from "react-validation/build/form";

import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";




export default class registerModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

//  componentDidMount() {
//    UserService.getAdminBoard().then(
//      response => {
//        this.setState({
//          content: response.data
//        });
//      },
//      error => {
//        this.setState({
//          content:
//            (error.response &&
//              error.response.data &&
//              error.response.data.message) ||
//            error.message ||
//            error.toString()
//        });
//
//        if (error.response && error.response.status === 401) {
//          EventBus.dispatch("logout");
//        }
//      }
//    );
//  }

  render() {
    return (


               <div className="card card-container">
                 <img
                   src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                   alt="profile-img"
                   className="profile-img-card"
                 />
                 <form>

                   <div class="form-group">
                     <label for="Username">Username</label>
                     <input type="Username" class="form-control" id="inputModUsername" placeholder="Username"/>
                   </div>
                   <div class="form-group">
                      <label for="inputModEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                      </div>
                    <div class="form-group">
                      <label for="inputModPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                   <div class="form-group">
                       <label for="formControlSelect1">Example select</label>
                       <select class="form-control" id="exampleFormControlSelect1">
                         <option>Fizjoterapeuta</option>
                         <option>Admin</option>

                       </select>
                     </div>
                   <button type="submit" class="btn btn-primary">Submit</button>
                 </form>
                </div>

    );
  }
}



