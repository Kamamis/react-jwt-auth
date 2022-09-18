import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';

export default class AddAppointment extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }
  

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>Dodaj wizytę</h3>
        </header>
     <Row>
      <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Rodzaj wizyty              
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href>HTML</a></li>
        <li><a href>CSS</a></li>
        <li><a href>JavaScript</a></li>
      </ul>
    </div> 

    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Data
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href>HTML</a></li>
        <li><a href>CSS</a></li>
        <li><a href>JavaScript</a></li>
      </ul>
    </div> 

    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Godzina
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href>HTML</a></li>
        <li><a href>CSS</a></li>
        <li><a href>JavaScript</a></li>
      </ul>
    </div> 
    </Row>

    </div>
    );
  }
}
