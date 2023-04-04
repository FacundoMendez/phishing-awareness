import React from 'react'
import "./footer.css"
import ReactGA from "react-ga"

const Footer = () => {

  const handleClick = (e, label) => {
    e.preventDefault();
    ReactGA.event({
      category: 'Enlace',
      action: 'Clic en enlace',
      label: label
    });
    window.location.href = e.target.href;
  }

  return (
    <div className="footer">
        <div className="boxMadeIn">
            <a href="https://www.linkedin.com/in/julian-bellafronte-473a67201/" onClick={(e) => handleClick(e, 'Julián Bellafronte')} target="_blank" rel="noopener noreferrer"><p>Made by <strong>Julián Bellafronte</strong></p></a> 
            <a href="https://www.linkedin.com/in/facundomendez7/" onClick={(e) => handleClick(e, 'Facundo Mendez')} target="_blank" rel="noopener noreferrer"><p>Made by <strong>Facundo Mendez</strong> </p></a> 
        </div>
    </div>
  )
}
export default Footer
