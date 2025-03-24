import type React from "react"
import { useState, useEffect } from "react"
import Modal from "./Modal"

const Labels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Asegurar que el componente Labels tenga eventos de puntero
  useEffect(() => {
    // Hacer que el contenedor del logo sea interactivo
    const logoContainer = document.querySelector(".logo-container")
    if (logoContainer) {
      // Asegurar que el elemento tenga pointer-events: auto
      logoContainer.classList.add("interactive")

      // Añadir un listener de clic directamente al DOM para mayor seguridad
      logoContainer.addEventListener("click", openModal)

      // Limpiar el listener cuando el componente se desmonte
      return () => {
        logoContainer.removeEventListener("click", openModal)
      }
    }
  }, [])


  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Page 1: Welcome/Intro */}
        <div id="page-1" className="page page--welcome page--intro">
          <h2 className="message"></h2>
          <div
            className="logo-container interactive"
            onClick={openModal}
            role="button"
            aria-label="Abrir información sobre IAMarket"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal()
              }
            }}
          >
            <div className="">
            <img src="/Images/logo.png" alt="Logo" className="imageLogo2" />
            </div>
          </div>
          <div className="scroll-indicator">
            <img src="/Images/scroll-bar.png" alt="Desliza!" className="scrollLogo" />
            <span className="scroll-text">Desliza horizontal</span>
          </div>
        </div>

        {/* Page 2: Under Construction */}
        <div id="page-2" className="page page--headband page--hidden">
          <h1 className="message">ALPHA</h1>
          <p className="message--sub">Prueba nuestro modelo especializado</p>
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
       {/* Modal con información sobre IAMarket */}
       <Modal isOpen={isModalOpen} onClose={closeModal} title="Bienvenido a IAMarket">
        <div className="modal-content">
          <div className="flex justify-center mb-6">
            <img src="/images/logo.png" alt="IAMarket Logo" className="w-32 h-auto" />
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            El futuro de la inteligencia artificial
          </h3>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            IAMarket es la primera plataforma que conecta creadores y usuarios de inteligencia artificial en un
            ecosistema único y revolucionario.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Marketplace</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Descubre y adquiere las mejores soluciones de IA creadas por expertos de todo el mundo.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Alpha</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Accede a versiones preliminares de las tecnologías más innovadoras antes que nadie.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">¿Por qué unirte?</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Acceso a tecnologías de IA de vanguardia</li>
              <li>Comunidad de innovadores y expertos</li>
              <li>Oportunidades para creadores y desarrolladores</li>
              <li>Soluciones personalizadas para tus necesidades</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Estamos en fase de construcción. Sé de los primeros en conocer nuestro lanzamiento.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-400 text-white rounded-full hover:shadow-lg transition-all">
              Suscríbete al newsletter
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Labels

