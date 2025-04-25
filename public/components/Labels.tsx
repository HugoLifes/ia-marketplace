"use client"

import type React from "react"
import { useMobile } from "./hooks/isMobil"
import { useRef, useState, useEffect } from "react"
import {
  X,
  Clock,
  Zap,
  User,
  Scale,
  Database,
  Award,
  Check,
  Star,
  Sparkles,
  Globe,
  Search,
  RefreshCw,
  Bot,
  BarChart2,
  MessageCircle,
  TrendingUp,
  Settings,
  Smartphone,
  MousePointer,
} from "lucide-react"

// Note: Add SplitText script to your HTML file or load it dynamically

const Labels: React.FC = () => {
  const isMobile = useMobile()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const [isKnowMoreModalOpen, setIsKnowMoreModalOpen] = useState(false)
  const [activeCase, setActiveCase] = useState<string | null>(null)
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false)
  const [isMarketplaceModalOpen, setIsMarketplaceModalOpen] = useState(false)

  // Primero, añadamos un nuevo estado para controlar el modal del nuevo modelo
  const [isNewModelModalOpen, setIsNewModelModalOpen] = useState(false)
  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.log("Datos de suscripción:", formData)

      // Aquí puedes agregar tu lógica para procesar el formulario
      // Por ejemplo, una llamada a una API
      // await apiCall(formData);

      // Simular un tiempo de carga
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Procesar la respuesta
      setIsFormSubmitted(true)
      console.log("Formulario procesado con éxito")
    } catch (error) {
      console.error("Error al procesar el formulario:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const [activePlan, setActivePlan] = useState<string>("alpha")
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    purpose: "",
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Función para abrir el panel de opciones
  const handleOpenOptions = () => {
    console.log("Abriendo opciones")
    // Aquí puedes implementar la lógica para abrir un modal o panel de opciones
    // Por ejemplo: setShowOptions(true);
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Referencias y estado para el drag-to-scroll
  const comparisonContentRef = useRef<HTMLDivElement>(null)
  const alphaModalContentRef = useRef<HTMLDivElement>(null)
  const knowMoreModalContentRef = useRef<HTMLDivElement>(null)
  const subscriptionModalContentRef = useRef<HTMLDivElement>(null)
  const marketplaceModalContentRef = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  // Funciones para el modal de Alpha Agents
  const openAlphaModal = () => setIsAlphaModalOpen(true)
  const closeAlphaModal = () => setIsAlphaModalOpen(false)

  // Funciones para el modal de Conoce Más
  const openKnowMoreModal = () => setIsKnowMoreModalOpen(true)
  const closeKnowMoreModal = () => setIsKnowMoreModalOpen(false)

  // Funciones para el modal de Suscripción
  const openSubscriptionModal = () => setIsSubscriptionModalOpen(true)
  const closeSubscriptionModal = () => setIsSubscriptionModalOpen(false)

  // Funciones para el modal de Comparativa
  const openComparisonModal = () => setIsComparisonModalOpen(true)
  const closeComparisonModal = () => setIsComparisonModalOpen(false)

  // Añadamos las funciones para abrir y cerrar el modal
  const openNewModelModal = () => setIsNewModelModalOpen(true)
  const closeNewModelModal = () => setIsNewModelModalOpen(false)

  const openMarketplaceModal = () => setIsMarketplaceModalOpen(true) // Añadir esta línea
  const closeMarketplaceModal = () => setIsMarketplaceModalOpen(false) // Añadir esta línea

  // Función para mostrar detalles de caso
  const showCaseDetails = (caseId: string) => {
    setActiveCase(activeCase === caseId ? null : caseId)
  }

  // Funciones para el drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartY(e.clientY)

    const currentRef =
      comparisonContentRef.current ||
      alphaModalContentRef.current ||
      knowMoreModalContentRef.current ||
      subscriptionModalContentRef.current ||
      marketplaceModalContentRef.current

    if (currentRef) {
      setScrollTop(currentRef.scrollTop)
      currentRef.style.cursor = "grabbing"
      currentRef.style.userSelect = "none"
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
    if (comparisonContentRef.current) {
      setScrollTop(comparisonContentRef.current.scrollTop)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const y = e.clientY
    const walk = (startY - y) * 2 // Multiplicador para ajustar la velocidad del scroll

    const currentRef =
      comparisonContentRef.current ||
      alphaModalContentRef.current ||
      knowMoreModalContentRef.current ||
      subscriptionModalContentRef.current ||
      marketplaceModalContentRef.current

    if (currentRef) {
      currentRef.scrollTop = scrollTop + walk
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const y = e.touches[0].clientY
    const walk = (startY - y) * 2

    const currentRef =
      comparisonContentRef.current ||
      alphaModalContentRef.current ||
      knowMoreModalContentRef.current ||
      subscriptionModalContentRef.current ||
      marketplaceModalContentRef.current

    if (currentRef) {
      currentRef.scrollTop = scrollTop + walk
    }
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
    // Restaurar el cursor
    const currentRef =
      comparisonContentRef.current ||
      alphaModalContentRef.current ||
      knowMoreModalContentRef.current ||
      subscriptionModalContentRef.current ||
      marketplaceModalContentRef.current

    if (currentRef) {
      currentRef.style.cursor = "grab"
      currentRef.style.userSelect = "auto"
    }
  }

  // Efecto para añadir/eliminar event listeners globales
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        if (comparisonContentRef.current) {
          comparisonContentRef.current.style.cursor = "grab"
          comparisonContentRef.current.style.userSelect = "auto"
        }
      }
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("touchend", handleGlobalMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchend", handleGlobalMouseUp)
    }
  }, [isDragging])

  // Añadir un nuevo estado para controlar si se muestran precios mensuales o anuales
  const [isPriceAnnual, setIsPriceAnnual] = useState<boolean>(false)

  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Page 1: Welcome/Intro */}
        <div id="page-1" className="page page--welcome page--intro">
          <h1 id="wTitle" className="welcome-text-title">
            AGENTES ESPECIALIZADOS DE INTELIGENCIA ARTIFICIAL
          </h1>

          <div className="twister1">
            <div className="logo-container">
              <img src="/Images/logo2.png" alt="logo" className="imageLogo2" />
            </div>
          </div>
          <div
            className="features-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
              position: "relative",
              top: "20%",
              padding: "0 20px",
            }}
          >

<div className="feature-item" style={{ textAlign: "center", flex: "1" }}>
          <h3 style={{ color: "white", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", marginBottom: "8px" }}>
            Creamos tu modelo
          </h3>
          <p style={{ color: "#ccc", fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}>Entrenamiento y alojamiento</p>
        </div>
        <div className="feature-item" style={{ textAlign: "center", flex: "1" }}>
          <h3 style={{ color: "white", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", marginBottom: "8px" }}>
            IA Avanzada
          </h3>
          <p style={{ color: "#ccc", fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}>Entrenada en tiempo real con tech propia</p>
        </div>
        <div className="feature-item" style={{ textAlign: "center", flex: "1" }}>
          <h3 style={{ color: "white", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", marginBottom: "8px" }}>
            Nuestra IA
          </h3>
          <p style={{ color: "#ccc", fontSize: "clamp(0.8rem, 1.5vw, 1rem)" }}>Aprende, se adapta y evoluciona</p>
        </div>
          </div>

          

          <div className="welcome-button-container">
            <button className="primary-button" onClick={openModal}>
              Que es I'AM?
            </button>
          </div>

          <div className="scroll-indicator">
            {isMobile ? (
              <img
                src="/Images/mobil2.png"
                alt="Desliza!"
                className="scrollLogo2"
              />
            ) : (
              <img
                src="/Images/mouse-cursor.png"
                alt="Desliza!"
                className="scrollLogo"
              />
            )}
            <span className="scroll-text">
              {isMobile ? "Desliza" : "Scroll inmersivo"}
            </span>
          </div>

          {/* Texto clickeable 'Explora a los Alpha Agents' con efecto hover */}

          <a
            className="clickable-text"
            onClick={() =>
              window.open("https://iamex.io/marketplace", "_blank")
            }
          >
            Explora a los Alpha Agents{" >"}
          </a>
        </div>

        {/* Page 2: ALPHA */}
        <div id="page-2" className="page page--alpha page--hidden">
          <div className="alpha-content">
            {/*
            <div className="alpha-guide">
              <span className="animated-hint">
                Haz clic para activar a Alpha
              </span>
            </div>*/}
            <div className="alpha-title-container" ></div>
            <h1 id="alphaT" className="alpha-title">
              Alpha Agent
            </h1>

            <div className="alpha-button-container">
              <button className="primary-button" onClick={openKnowMoreModal}>
                Conoce más
              </button>
            </div>

            <div className="alpha-subtitle-container">
              <p
                className="alpha-subtitle clickable"
                onClick={openNewModelModal}
              >
                Nuevo modelo by IAM <span className="click-indicator"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Page 3: MarketPlace */}
        <div id="page-3" className="page page--marketplace page--hidden">
          <div className="marketplace-content">
            <h1 id="marketplaceT" className="marketplace-title">
              Market Agents
            </h1>

            <div className="marketplace-button-container">
              <button
                className="primary-button"
                onClick={() =>
                  window.open("https://iamex.io/marketplace", "_blank")
                }
              >
                Visitar el Marketplace
              </button>
            </div>

            <div className="marketplace-subtitle-container">
              <p
                className="marketplace-subtitle clickable"
                onClick={openMarketplaceModal}
              >
                Descubre el ecosistema de agentes inteligentes{" "}
                <span className="click-indicator"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Page 4: Comparativa */}
        <div
          id="page-4"
          className="page page--comparison page--hidden"
          style={{ overflow: "hidden", height: "100vh" }}
        >
          <div className="comparison-page-content">
            <h1 className="comparison-title">Tecnologías de IA</h1>
            <p className="comparison-subtitle">
              Elige la solución perfecta para tu negocio
            </p>
            <div className="comparison-button-container">
              <button className="primary-button" onClick={openComparisonModal}>
                Comparar tecnologías
              </button>
            </div>
          </div>
        </div>

        {/* Page 5: Suscripción */}
        <div id="page-5" className="page page--subscription">
          <div className="subscription-page-content">
            <h1 className="subscription-title">Membresias y Planes</h1>
            <p className="subscription-subtitle">
              Elige el plan perfecto para potenciar tu negocio con IA
            </p>

            <button className="primary-button" onClick={openSubscriptionModal}>
              Ver planes disponibles
            </button>
          </div>
        </div>

        {/* Modal de pantalla completa */}
        {isModalOpen && (
          <div className="fullscreen-modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
              <button
                className="modal-close-button"
                onClick={closeModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                <h2>I'AM está despertando...</h2>
                <div className="video-container video-modal-content">
                  <video
                    className="modal-video"
                    autoPlay
                    controls
                    loop
                    playsInline
                    controlsList="nodownload"
                  >
                    <source src="/videos/descubre.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Alpha Agents */}
        {isAlphaModalOpen && (
          <div
            className="fullscreen-modal"
            style={{ overflow: "hidden", pointerEvents: "auto" }}
          >
            <div className="modal-overlay" onClick={closeAlphaModal}></div>
            <div className="modal-content alpha-modal-content">
              <button
                className="modal-close-button"
                onClick={closeAlphaModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                <h2 className="alpha-modal-title">Alpha Agents</h2>
                <div className="alpha-agents-grid">
                  <div className="alpha-agent-card">
                    <div className="alpha-agent-icon">🤖</div>
                    <h3>Asistente de Ventas</h3>
                    <p>
                      Un agente inteligente que puede gestionar consultas de
                      clientes y cerrar ventas automáticamente.
                    </p>
                  </div>
                  <div className="alpha-agent-card">
                    <div className="alpha-agent-icon">📊</div>
                    <h3>Analista de Datos</h3>
                    <p>
                      Procesa grandes volúmenes de datos y genera informes
                      detallados con insights valiosos.
                    </p>
                  </div>
                  <div className="alpha-agent-card">
                    <div className="alpha-agent-icon">📅</div>
                    <h3>Gestor de Agenda</h3>
                    <p>
                      Organiza tu calendario, programa reuniones y envía
                      recordatorios automáticos.
                    </p>
                  </div>
                  <div className="alpha-agent-card">
                    <div className="alpha-agent-icon">💬</div>
                    <h3>Soporte 24/7</h3>
                    <p>
                      Proporciona atención al cliente instantánea en cualquier
                      momento del día.
                    </p>
                  </div>
                </div>
                <div className="alpha-modal-footer">
                  <p>
                    Los Alpha Agents representan la próxima generación de
                    asistentes virtuales, diseñados específicamente para tu
                    negocio.
                  </p>
                  <button
                    className="primary-button"
                    onClick={() =>
                      window.open("https://iamex.io/alpha", "_blank")
                    }
                  >
                    Solicitar acceso anticipado
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Conoce Más */}
        {isKnowMoreModalOpen && (
          <div
            className="fullscreen-modal"
            style={{ overflow: "hidden", pointerEvents: "auto" }}
          >
            <div className="modal-overlay" onClick={closeKnowMoreModal}></div>
            <div className="modal-content know-more-modal">
              <button
                className="modal-close-button"
                onClick={closeKnowMoreModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                <h2 className="know-more-title">Proyecto ALPHA</h2>

                <div className="know-more-section">
                  <h3>¿Qué es ALPHA?</h3>
                  <p>
                    ALPHA es nuestra iniciativa más ambiciosa en el campo de la
                    inteligencia artificial. Representa un salto evolutivo en la
                    forma en que las máquinas comprenden y procesan la
                    información, acercándonos a una IA con capacidades
                    cognitivas similares a las humanas.
                  </p>
                </div>

                <div className="know-more-section">
                  <h3>Características principales</h3>
                  <ul className="know-more-list">
                    <li>
                      <strong>Aprendizaje continuo:</strong> ALPHA mejora
                      constantemente a través de cada interacción, adaptándose a
                      nuevos contextos y desafíos.
                    </li>
                    <li>
                      <strong>Razonamiento abstracto:</strong> Capacidad para
                      entender conceptos complejos y establecer conexiones entre
                      ideas aparentemente no relacionadas.
                    </li>
                    <li>
                      <strong>Procesamiento multimodal:</strong> Integración
                      perfecta de texto, imágenes, audio y datos estructurados
                      en un único sistema de comprensión.
                    </li>
                    <li>
                      <strong>Conciencia contextual:</strong> Entiende no solo
                      el contenido de la información, sino también su contexto
                      cultural, histórico y social.
                    </li>
                  </ul>
                </div>

                <div className="know-more-section">
                  <h3>Aplicaciones</h3>
                  <div className="applications-grid">
                    <div className="application-card">
                      <h4>Medicina</h4>
                      <p>
                        Diagnóstico avanzado y desarrollo de tratamientos
                        personalizados.
                      </p>
                    </div>
                    <div className="application-card">
                      <h4>Investigación científica</h4>
                      <p>
                        Aceleración de descubrimientos mediante análisis de
                        datos complejos.
                      </p>
                    </div>
                    <div className="application-card">
                      <h4>Educación</h4>
                      <p>
                        Sistemas de aprendizaje adaptativo que se ajustan a cada
                        estudiante.
                      </p>
                    </div>
                    <div className="application-card">
                      <h4>Creatividad</h4>
                      <p>
                        Colaboración en procesos creativos para arte, música y
                        diseño.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="know-more-footer">
                  <p>
                    ALPHA representa nuestro compromiso con un futuro donde la
                    inteligencia artificial potencia el potencial humano en
                    lugar de reemplazarlo.
                  </p>
                  <button
                    className="know-more-cta"
                    onClick={() =>
                      window.open("https://iamex.io/register", "_blank")
                    }
                  >
                    Únete al programa ALPHA
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Comparativa de Tecnologías */}
        {isComparisonModalOpen && (
          <div className="fullscreen-modal">
            <div className="modal-overlay" onClick={closeComparisonModal}></div>
            <div className="modal-content comparison-modal-content">
              <button
                className="modal-close-button"
                onClick={closeComparisonModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                <div
                  ref={comparisonContentRef}
                  className="comparison-content draggable-content"
                  style={{
                    cursor: "grab",
                    overflow: "hidden",
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUpOrLeave}
                  onMouseLeave={handleMouseUpOrLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUpOrLeave}
                >
                  <div className="drag-scroll-indicator">
                    <div className="drag-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19M12 5L6 11M12 5L18 11"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Arrastra para desplazarte</span>
                  </div>

                  {/* Tabla comparativa */}
                  <div className="comparison-table-container">
                    <div className="comparison-table">
                      <div className="table-header">
                        <div className="header-cell empty-cell"></div>
                        <div className="header-cell">
                          <div className="header-icon fine-tuning-icon">
                            <Award size={28} />
                          </div>
                          <h3>Fine-Tuning</h3>
                        </div>
                        <div className="header-cell">
                          <div className="header-icon vectorization-icon">
                            <Database size={28} />
                          </div>
                          <h3>Vectorización Semántica</h3>
                        </div>
                      </div>

                      <div className="table-row">
                        <div className="row-label">Personalización</div>
                        <div className="row-cell">
                          <span className="value-label high-value">
                            Muy alta
                          </span>
                          <div className="value-bar">
                            <div
                              className="value-fill"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="row-cell">
                          <span className="value-label medium-value">
                            Media
                          </span>
                          <div className="value-bar">
                            <div
                              className="value-fill"
                              style={{ width: "50%" }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="table-row">
                        <div className="row-label">Casos ideales</div>
                        <div className="row-cell">
                          <div className="case-tags">
                            <span className="case-tag">Marca personal</span>
                            <span className="case-tag">Legal</span>
                          </div>
                        </div>
                        <div className="row-cell">
                          <div className="case-tags">
                            <span className="case-tag">Soporte</span>
                            <span className="case-tag">Base de datos</span>
                          </div>
                        </div>
                      </div>

                      <div className="table-row">
                        <div className="row-label">Tiempo</div>
                        <div className="row-cell">
                          <div className="time-indicator">
                            <Clock size={18} />
                            <span>48-72 hrs</span>
                          </div>
                        </div>
                        <div className="row-cell">
                          <div className="time-indicator instant">
                            <Zap size={18} />
                            <span>Instantáneo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Casos reales */}
                  <div className="real-cases-section">
                    <h2 className="section-title">Casos reales destacados</h2>
                    <div className="cases-container">
                      <div
                        className={`case-card ${
                          activeCase === "influencer" ? "active" : ""
                        }`}
                        onClick={() => showCaseDetails("influencer")}
                      >
                        <div className="case-icon">
                          <User size={24} />
                        </div>
                        <h3>Influencer</h3>
                        {activeCase === "influencer" && (
                          <div className="case-details">
                            <p>
                              Un influencer con 500K seguidores implementó un
                              asistente IA personalizado que responde preguntas
                              sobre sus productos y contenido, aumentando su
                              engagement en un 35%.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className={`case-card ${
                          activeCase === "legal" ? "active" : ""
                        }`}
                        onClick={() => showCaseDetails("legal")}
                      >
                        <div className="case-icon">
                          <Scale size={24} />
                        </div>
                        <h3>Despacho Legal</h3>
                        {activeCase === "legal" && (
                          <div className="case-details">
                            <p>
                              Un bufete de abogados redujo en un 60% el tiempo
                              de investigación de casos al implementar un
                              sistema de IA entrenado con su biblioteca de
                              precedentes legales.
                            </p>
                          </div>
                        )}
                      </div>

                      <div
                        className={`case-card ${
                          activeCase === "medical" ? "active" : ""
                        }`}
                        onClick={() => showCaseDetails("medical")}
                      >
                        <div className="case-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8 19H5c-1 0-2-1-2-2v-1a3 3 0 0 1 3-3h1"></path>
                            <path d="M16 19h3c1 0 2-1 2-2v-1a3 3 0 0 0-3-3h-1"></path>
                            <path d="M12 19v-9"></path>
                            <path d="M12 6V5c0-1 1-2 2-2h1a2 2 0 0 1 0 4h-3Z"></path>
                            <path d="M8 5c0-1 1-2 2-2"></path>
                          </svg>
                        </div>
                        <h3>Médico</h3>
                        {activeCase === "medical" && (
                          <div className="case-details">
                            <p>
                              Una clínica especializada implementó un asistente
                              IA para pre-diagnóstico y seguimiento de
                              pacientes, mejorando la satisfacción del paciente
                              en un 42%.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="training-cta">
                    <button
                      className="training-button"
                      onClick={() =>
                        window.open("https://iamex.io/marketplace", "_blank")
                      }
                    >
                      Solicita tu entrenamiento especializado
                    </button>
                    <div className="training-button-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Suscripción */}
        {isSubscriptionModalOpen && (
          <div
            className="fullscreen-modal"
            style={{ overflow: "hidden", pointerEvents: "auto" }}
          >
            <div
              className="modal-overlay"
              onClick={closeSubscriptionModal}
            ></div>
            <div className="modal-content subscription-modal-content">
              <button
                className="modal-close-button"
                onClick={closeSubscriptionModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                {/* Selector de periodo (mensual/anual) */}
                <div className="billing-toggle">
                  <span className={!isPriceAnnual ? "active" : ""}>
                    Mensual
                  </span>
                  <div
                    className={`toggle-switch ${
                      isPriceAnnual ? "annual" : "monthly"
                    }`}
                    onClick={() => setIsPriceAnnual(!isPriceAnnual)}
                  >
                    <div className="toggle-knob"></div>
                  </div>
                  <span className={isPriceAnnual ? "active" : ""}></span>
                </div>

                <div className="plans-container">
                  {/* Plan Free */}
                  <div
                    className={`plan-card ${
                      activePlan === "free" ? "active" : ""
                    }`}
                  >
                    <div className="plan-header">
                      <Globe className="plan-icon" size={32} />
                      <h3 className="plan-name">Plan Básico</h3>
                      <div className="plan-price">
                        {isPriceAnnual ? (
                          <>
                            $190<span>/anual</span>
                          </>
                        ) : (
                          <>
                            $19 <span>/mes</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="plan-features">
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>Respuestas automáticas básicas y precisas</span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Clasificación automática de documentos adjuntos (PDF,
                          Word, Excel)
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Almacenamiento y listado básico en Google Drive
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>Soporte básico vía email</span>
                      </div>
                    </div>
                    <button
                      className="plan-cta"
                      onClick={() =>
                        window.open("https://iamex.io/plans", "_blank")
                      }
                    >
                      Suscribete ahora
                    </button>
                  </div>

                  {/* Plan Pro */}
                  <div
                    className={`plan-card ${
                      activePlan === "pro" ? "active" : ""
                    }`}
                  >
                    <div className="plan-badge">Recomendado</div>
                    <div className="plan-header">
                      <Star className="plan-icon" size={32} />
                      <h3 className="plan-name">Plan Pro</h3>
                      <div className="plan-price">
                        {isPriceAnnual ? (
                          <>
                            $490<span>/anual</span>
                          </>
                        ) : (
                          <>
                            $49<span>/mes</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="plan-features">
                      <div className="plan-feature highlight">
                        <Sparkles size={18} className="feature-sparkle" />
                        <span>
                          Gestión y automatización avanzada de correos
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Generación automática y personalizada de reportes y
                          documentos
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Integración avanzada con Google Drive (guardar,
                          listar, enviar y resumir documentos)
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Resúmenes inteligentes de contenidos y videos
                          (YouTube)
                        </span>
                      </div>
                    </div>
                    <button
                      className="plan-cta highlight"
                      onClick={() =>
                        window.open("https://iamex.io/plans", "_blank")
                      }
                    >
                      Suscríbete ahora
                    </button>
                  </div>

                  {/* Plan Pro */}
                  <div
                    className={`plan-card ${
                      activePlan === "pro" ? "active" : ""
                    }`}
                  >
                    <div className="plan-header">
                      <Zap className="plan-icon" size={32} />
                      <h3 className="plan-name">Enterprise</h3>
                      <div className="plan-price">
                        {isPriceAnnual ? (
                          <>
                            $990<span>/anual</span>
                          </>
                        ) : (
                          <>
                            $99<span>/mes</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="plan-features">
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Gestión estratégica completa de comunicaciones
                          corporativas
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Automatización integral de atención vía WhatsApp
                          (videollamadas, transcripciones y resúmenes
                          automáticos)
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Funcionalidades legales avanzadas (generación y
                          revisión automática de contratos)
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Acceso a dashboard avanzado para control y monitoreo
                          en tiempo real
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>
                          Análisis de sentimientos avanzado y flujo optimizado
                          de ventas
                        </span>
                      </div>
                      <div className="plan-feature">
                        <Check size={18} className="feature-check" />
                        <span>Soporte personalizado y dedicado 24/7</span>
                      </div>
                    </div>
                    <button
                      className="plan-cta"
                      onClick={() =>
                        window.open("https://iamex.io/plans", "_blank")
                      }
                    >
                      Suscríbete ahora
                    </button>
                  </div>

                  {/* Plan Enterprise */}
                </div>

                <div className="subscription-form-container">
                  <h2 className="form-title">
                    ¿Interesado en nuestros planes?
                  </h2>
                  <p className="form-subtitle">
                    Déjanos tus datos y te contactaremos para ofrecerte la mejor
                    solución
                  </p>

                  {!isFormSubmitted ? (
                    <form className="subscription-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Empresa</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="purpose">
                          ¿Cómo usarías nuestra IA?
                        </label>
                        <textarea
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          placeholder="Cuéntanos brevemente tu caso de uso"
                          rows={3}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="subscription-submit-btn"
                        disabled={isLoading}
                      >
                        {isLoading ? "Enviando..." : "Suscríbete ahora"}
                      </button>
                    </form>
                  ) : (
                    <div className="form-success">
                      <div className="success-icon">
                        <Check size={48} />
                      </div>
                      <h3>¡Gracias por tu interés!</h3>
                      <p>
                        Hemos recibido tu información y nos pondremos en
                        contacto contigo pronto.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal para Nuevo Modelo by IAM */}
        {isNewModelModalOpen && (
          <div className="fullscreen-modal">
            <div className="modal-overlay" onClick={closeNewModelModal}></div>
            <div className="modal-content video-modal-content">
              <button
                className="modal-close-button"
                onClick={closeNewModelModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div className="modal-body">
                <h2>ALPHA NUESTRO PRIMER AGENT ESPECIALIZADO</h2>
                <div className="video-container">
                  <video
                    className="modal-video"
                    autoPlay
                    controls
                    loop
                    playsInline
                    controlsList="nodownload"
                    disablePictureInPicture
                  >
                    <source
                      src="/videos/Intro.Alpha.V.1.4.mp4"
                      type="video/mp4"
                    />
                    Tu navegador no soporta videos HTML5.
                  </video>
                </div>
                <p>
                  Sorprendete con ALPHA AGENT, el primer modelo especializado de
                  I'AM. Conoce su potencial y cómo puede transformar tu negocio.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal para Marketplace */}
        {isMarketplaceModalOpen && (
          <div
            className="fullscreen-modal"
            style={{ overflow: "hidden", pointerEvents: "auto" }}
          >
            <div
              className="modal-overlay"
              onClick={closeMarketplaceModal}
            ></div>
            <div className="modal-content marketplace-modal-content">
              <button
                className="modal-close-button"
                onClick={closeMarketplaceModal}
                title="Cerrar"
              >
                <X size={24} />
              </button>
              <div
                ref={marketplaceModalContentRef}
                className="modal-body draggable-content"
                style={{
                  maxHeight: "80vh",
                  overflowY: "auto",
                  cursor: "grab",
                  padding: "30px",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUpOrLeave}
              >
                <h2>Ecosistema de Agentes Inteligentes</h2>

                <div className="marketplace-features">
                  <div className="marketplace-feature">
                    <div className="feature-icon">
                      <Search size={28} className="marketplace-icon" />
                    </div>
                    <h3>Explora</h3>
                    <p>Encuentra agentes especializados para cada necesidad</p>
                  </div>
                  <div className="marketplace-feature">
                    <div className="feature-icon">
                      <RefreshCw size={28} className="marketplace-icon" />
                    </div>
                    <h3>Integra</h3>
                    <p>
                      Conecta múltiples agentes para crear flujos de trabajo
                    </p>
                  </div>
                  <div className="marketplace-feature">
                    <div className="feature-icon">
                      <Zap size={28} className="marketplace-icon" />
                    </div>
                    <h3>Potencia</h3>
                    <p>Amplifica tus capacidades con IA especializada</p>
                  </div>
                </div>

                <div className="marketplace-floating-elements">
                  <div className="floating-element element-1">
                    <Bot size={24} className="floating-icon" />
                  </div>
                  <div className="floating-element element-2">
                    <BarChart2 size={24} className="floating-icon" />
                  </div>
                  <div className="floating-element element-3">
                    <MessageCircle size={24} className="floating-icon" />
                  </div>
                  <div className="floating-element element-4">
                    <TrendingUp size={24} className="floating-icon" />
                  </div>
                  <div className="floating-element element-5">
                    <Settings size={24} className="floating-icon" />
                  </div>
                </div>

                <p className="marketplace-description">
                  Nuestro marketplace ofrece una amplia gama de agentes
                  especializados que pueden integrarse perfectamente para
                  potenciar tu negocio con inteligencia artificial avanzada.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Labels
