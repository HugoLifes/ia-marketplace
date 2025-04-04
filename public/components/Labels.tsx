import type React from "react"
import { useState } from "react"
import Form from "./utils/form"

// Note: Add SplitText script to your HTML file or load it dynamically


const Labels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const [isLoading, setIsLoading] = useState(false);
  
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      console.log('Valores enviados:', values);
      
      // Aquí puedes agregar tu lógica para procesar el formulario
      // Por ejemplo, una llamada a una API
      // await apiCall(values);
      
      // Simular un tiempo de carga
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Procesar la respuesta
      console.log('Formulario procesado con éxito');
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Función para abrir el panel de opciones
  const handleOpenOptions = () => {
    console.log('Abriendo opciones');
    // Aquí puedes implementar la lógica para abrir un modal o panel de opciones
    // Por ejemplo: setShowOptions(true);
  };
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  
  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Page 1: Welcome/Intro */}
        <div id="page-1" className="page page--welcome page--intro">
        
          <div className="twister1">
            <div className="logo-container">
              <img src="/Images/logo.png" alt="logo" className="imageLogo2" />
            </div>
          </div>


          <div className="welcome-button-container">
              <button className="primary-button">
                  Empieza tu viaje
              </button>
          </div>

          

          <div className="scroll-indicator">
            <img
              src="/Images/mouse-cursor.png"
              alt="Desliza!"
              className="scrollLogo"
            />
            <span className="scroll-text">Scroll inmersivo</span>
          </div>
        </div>

        {/* Page 2: ALPHA */}
        <div id="page-2" className="page page--alpha page--hidden">
          <div className="alpha-content">
            <h1 id="alphaT" className="alpha-title">
              Alpha
            </h1>

            <div className="alpha-button-container">
              <button className="primary-button">
                  Conoce más
              </button>
          </div>

            <div className="alpha-subtitle-container">
              <p className="alpha-subtitle">Nuevo modelo by IAM</p>
            </div>
          </div>
        </div>

        {/* Page 3: Email Signup */}
        <div id="page-3" className="page page--headband page--hidden">
          <h1 id="twister2" className="message1">
            Suscribete
          </h1>
          <p className="message--sub"></p>
          <div className="email-form-container">
           

            <form className="form">
              <div className="form-row">
                <input
                  type="email"
                  className="input-field"
                  placeholder="Ingresa tu correo"
                  required
                  />
                  <button className="submit-button" type="submit">
                    Enviar
                  </button>
              </div>
            </form>
            <p className="email-form-text">
              Recibe actualizaciones sobre iAM y nuestro trabajo.
            </p>
          </div>
        </div>

        {/* Page 4: Logo Display */}
        <div id="page-4" className="page page--headband page--hidden">
          <h1 className="message">UnderConstruction</h1>
          <p className="message--sub">by</p>
          <div className="logo-container">
            <img
              src="/images/logo.png"
              alt="Under Construction"
              className="imageLogo"
            />
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
  );
}

export default Labels

