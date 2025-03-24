import type React from "react"
import { useState } from "react"
import Modal from "./Modal"

const Labels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Page 1: Welcome/Intro */}
        <div id="page-1" className="page page--welcome page--intro">
          <h2 className="message"></h2>
          <div className="logo-container">
            <img src="/Images/logo.png" alt="Logo" className="imageLogo2" />
          </div>
          <div className="scroll-indicator">
            <img src="/Images/scroll-bar.png" alt="Desliza!" className="scrollLogo" />
            <span className="scroll-text">Desliza horizontal</span>
          </div>
        </div>

        {/* Page 2: Under Construction */}
        <div id="page-2" className="page page--headband page--hidden">
          <h1 className="message">ALPHA</h1>
          <p className="message--sub">Nuevo modelo by IAM</p>
          <button className="primary-button">Probar 🚀</button>
        </div>

        {/* Page 3: Email Signup */}
        <div id="page-3" className="page page--headband page--hidden">
          <h1 className="message">Subscibete!</h1>
          <p className="message--sub"></p>
          <div className="card">
            <h2 className="card-title">
              La evolución comienza aquí. Vive la inteligencia artificial como nunca antes.
            </h2>
            <p className="card-text">Deja tu correo y recibe acceso anticipado.</p>

            <form className="form">
              <input type="email" className="input-field" placeholder="Ingresa tu correo" required />
              <button className="submit-button" type="submit">
                ¡Quiero ser parte! 🚀
              </button>
            </form>
          </div>
        </div>

        {/* Page 4: Logo Display */}
        <div id="page-4" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub">by</p>
          <div className="logo-container">
            <img src="/images/logo.png" alt="Under Construction" className="imageLogo" />
          </div>
        </div>

        {/* Page 5: Coming Soon */}
        <div id="page-5" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub">IAMarket proximamente</p>
          <button className="primary-button">Mantente informado</button>
        </div>
      </div>
    </div>
  )
}

export default Labels

