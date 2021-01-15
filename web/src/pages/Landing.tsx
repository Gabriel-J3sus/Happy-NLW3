import React from 'react';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';
import { ArrowRightButton, TextButton } from '../components/Buttons';


function Landing() {
    return (
     <div id="page-landing">
        <div className="content-wrapper">
          <div className="title">
            <img src={logoImg} alt="Happy" />

            <div className="location">
              <strong>São Paulo</strong>
              <span>São Paulo</span>
            </div>
          </div>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças</p>
          </main>

          <TextButton go="/options" buttonClass="register-or-login" title="Acesso restrito"/>

          <ArrowRightButton go="/app" buttonClass="enter-app" iconSize={26} color="rgba(0,0,0,0.6)"/>
  
        </div>
      </div>
    );
}

export default Landing;