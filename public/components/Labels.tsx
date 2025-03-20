import React from 'react'
import ScrollAd from './ScrollAd';
const Labels: React.FC = () => {
  return (
    <div className="pages">
      <div className="pages_wrapper">
        <div id="page-1" className="page page--welcome page--intro">
          <h2 className="message"></h2>
          <center>
            <img
              src="../Images/logo.png"
              alt="Under Construction"
              className="imageLogo2"
            />
          </center>
         <img
              src="../Images/mouse-cursorWhite.png"
              alt="Desliza!"
              className="scrollLogo"
            />
        </div>
        <div id="page-2" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub"></p>
        </div>
        <div id="page-3" className="page page--headband page--hidden">
          <h1 className="message"></h1>
          <p className="message--sub"></p>
          <div className="card">
            <h2 className="card-title">Únete a nuestra lista de espera</h2>
            <p className="card-text">
              Déjanos tu correo y te avisaremos cuando lancemos.
            </p>

            <form className="form">
              <input
                type="email"
                className="input-field"
                placeholder="Ingresa tu correo"
                required
              />
              <button className="submit-button" type="submit" onClick={() => console.log('Enviado!')}>
                🚀 Notificarme
              </button>
            </form>
          </div>
        </div>
        <div id="page-4" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub">by</p>
          <center>
            <img
              src="../Images/logo.png"
              alt="Under Construction"
              className="imageLogo"
            />
          </center>
        </div>
        <div id="page-5" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub">IAMarket proximamente</p>

          
        </div>
      </div>
    </div>
  );
}

export default Labels;