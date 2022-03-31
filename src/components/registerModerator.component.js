import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

// const vroles = value => {
//   if (value.length < 2 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The role must be "ROLE_ADMIN" or "ROLE_MODERATOR".
//       </div>
//     );
//   }
// };

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRoles = this.onChangeRoles.bind(this);

    // console.log("1 z this.state.role: ", this.state.role);
    // console.log("1 z this.state.roles: ",this.state.roles);

    this.state = {
      username: "",
      email: "",
      password: "",
      roles: [],
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeRoles(e) {
    this.setState({
      roles: [e.target.value]
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    // console.log("2 z this.state.role: ", this.state.role);
    // console.log("2 z this.state.roles: ",this.state.roles);

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.roles
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });

          // console.log("3 z this.state.role: ", this.state.role);
          // console.log("3 z this.state.roles: ",this.state.roles);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="roles">Roles</label>
                  <Input
                    type="roles"
                    className="form-control"
                    name="roles"
                    placeholder="moderator or admin"
                    value={this.state.roles}
                    onChange={this.onChangeRoles}
                    validations={[required]}
                  />
                </div> 
                
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  // role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}



// import React, { Component } from "react";
// import Form from "react-validation/build/form";

// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";
// import UserService from "../services/user.service";
// import EventBus from "../common/EventBus";




// export default class registerModerator extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       content: ""
//     };
//   }

//   componentDidMount() {
//     UserService.getRegisterModerator().then(
//       response => {
//         this.setState({
//           content: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//         });

//        if (error.response && error.response.status === 401) {
//          EventBus.dispatch("logout");
//        }
//       }
//     );
//   }

//   render() {
//     return (


//                <div className="card card-container">
//                  <img
//                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                    alt="profile-img"
//                    className="profile-img-card"
//                  />
//                  <form>

//                    <div class="form-group">
//                      <label for="Username">Username</label>
//                      <input type="Username" class="form-control" id="inputModUsername" placeholder="Username"/>
//                    </div>
//                    <div class="form-group">
//                       <label for="inputModEmail1">Email address</label>
//                       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                       </div>
//                     <div class="form-group">
//                       <label for="inputModPassword1">Password</label>
//                       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//                       </div>
//                    <div class="form-group">
//                        <label for="formControlSelect1">Example select</label>
//                        <select class="form-control" id="exampleFormControlSelect1">
//                          <option>Fizjoterapeuta</option>
//                          <option>Admin</option>

//                        </select>
//                      </div>
//                    <button type="submit" class="btn btn-primary">Submit</button>
//                  </form>
//                 </div>

//     );
//   }
// }



