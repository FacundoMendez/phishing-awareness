import React from 'react'
import "./footer.css"
import ReactGA from "react-ga"

const Footer = () => {

  const handleClick = (label, url) => {
    ReactGA.event({
      category: 'Linkedin',
      action: 'Click en enlace de Perfil ',
      label: label,
      value: url
    });
  };

  return (
    <div className="footer">
    <div className="boxMadeIn">
      <a
        href="https://www.linkedin.com/in/julian-bellafronte-473a67201/"
        onClick={() => handleClick('Julian-Bellafronte', 'https://www.linkedin.com/in/julian-bellafronte-473a67201/')}
        target="_blank"
        rel="noopener noreferrer">
        <p>Made by <strong>Julián Bellafronte</strong></p>
      </a>

      <a
        href="https://www.linkedin.com/in/facundomendez7/"
        onClick={() => handleClick('Facundo-Mendez', 'https://www.linkedin.com/in/facundomendez7/')}
        target="_blank"
        rel="noopener noreferrer">
        <p>Made by <strong>Facundo Mendez</strong> </p>
      </a>
    </div>
    </div>
  )
}
export default Footer
