import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Offer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Offer</h3>
        </header>
      <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="logo192.png" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
            </div>

    );
  }
}
