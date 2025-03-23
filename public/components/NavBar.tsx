import type React from "react"

interface NavbarProps {
  scrollToSection: (sectionId: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("page-1")
            }}
          >
            IAMarket
          </a>
        </div>

        <div className="navbar-links">
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("page-1")
            }}
          >
            Home
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("page-3")
            }}
          >
            Marketplace
          </a>
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("page-5")
            }}
          >
            Alpha
          </a>
        </div>

        <div className="navbar-about">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("page-4")
            }}
          >
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

