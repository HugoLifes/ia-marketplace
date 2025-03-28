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
          <h2  className="message"></h2>
          <div  className="twister1">
            <div  className="logo-container">
              
                <img src="/Images/logo.png"  className="imageLogo2" />
            </div>
          </div>
          <div className="scroll-indicator">
            <img src="/Images/mouse-cursor.png" alt="Desliza!" className="scrollLogo" />
            <span className="scroll-text">Scroll para inmersion</span>
          </div>
        </div>

        {/* Page 2: Under Construction */}
        <div id="page-2" className="page page--alpha page--hidden">
        <div className="alpha-content">
            <h1 className="alpha-title">Alpha</h1>

            <div className="alpha-button-container">
              <button className="primary-button">
                Probar  🚀
              </button>
            </div>

            <div className="alpha-subtitle-container">
              <p className="alpha-subtitle">Nuevo modelo by IAM</p>
            </div>

          </div>
        </div>

        {/* Page 3: Email Signup */}
        <div id="page-3" className="page page--headband page--hidden">
          <h1 id="twister2" className="message">Suscribete</h1>
          <p className="message--sub"></p>
          <div className="email-form-container">
            
            <p className="email-form-text">Deja tu correo y recibe acceso anticipado.</p>

            <form className="form">
              <div className="form-row">
                <input type="email" className="input-field" placeholder="Ingresa tu correo" required />
                <button className="submit-button" type="submit">
                   🚀
                </button>
              </div>
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

