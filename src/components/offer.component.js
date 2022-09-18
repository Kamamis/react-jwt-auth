import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';


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
          <h3>Oferta</h3>
        </header>
            <Row>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="manualna2.jpg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Masaż rehabilitacyjny</h5>
                  <p class="card-text">Masaż rehabilitacyjny to zabieg, który umożliwia, ułatwia i przyspiesza powrót do sprawności fizycznej. Wyróżnić możemy np. masaż kręgosłupa, nóg, bądź głowy. </p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="masaz_relaksacyjny.jpeg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Masaż relaksacyjny</h5>
                  <p class="card-text">Skupia się na redukowaniu napięć mięśniowych, odprężaniu całego ciała, zmniejszaniu tkanki tłuszczowej, eliminowaniu bólu, poprawie krążenia i przepływu limfy.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="manualna.jpeg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Terapia manualna</h5>
                  <p class="card-text">Techniki diagnostyczno-lecznicze nakierowane na wykrywanie i leczenie zaburzeń w obrębie stawów, więzadeł, mięśni oraz wzorców postawy, wzorców ruchowych i oddechowych.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              </Row>
              <Row>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="laser.jpeg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Laseroterapia</h5>
                  <p class="card-text">Stymulacja procesów leczniczych narządu ruchu. Laser działa przeciwzapalnie, przeciwbólowo, przeciwobrzękowo, wspomaga gojenie i stymuluje mikrokrążenie.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="magnes.jpeg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Magnetorapia</h5>
                  <p class="card-text">Jedna z metod fizykoterapeutycznych. Polega na wykorzystaniu właściwości pola magnetycznego, które przenika w głąb zmienionych chorobowo tkanek i mobilizuje je do regeneracji.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" src="elektro.jpeg" alt="Card cap"/>
                <div class="card-body">
                  <h5 class="card-title">Elektroterapia</h5>
                  <p class="card-text">Celem elektroterapii jest leczenie bólu oraz wspomaganie regeneracji organizmu. Do ich przeprowadzenia stosuje się prądy stałe oraz impulsywne o małej i średniej częstotliwości.</p>
                  <a href="/user" class="btn btn-primary">Umów się</a>
                </div>
              </div>
              </Row>
            </div>

    );
  }
}
