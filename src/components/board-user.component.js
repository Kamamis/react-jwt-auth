import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Profil użytkownika</h3>
        </header>
        <a href="/addAppointment" class="btn btn-primary">Umów wizytę</a>
        <h4>.</h4>
        <h4>.</h4>
        <h4>Moje wizyty</h4>
        <Row>
        <h5>Terapia manualna - Marta Mróz - 25.05.2022 - godz. 16.30  </h5>
        <a href="/updateAppointment" class="btn btn-primary">Zmień termin</a>
        <a href="/updateAppointment" class="btn btn-primary">Usuń wizytę</a>
        </Row>
      </div>
    );
  }
}
