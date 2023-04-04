import React from 'react'
import "./footer.css"
import ReactGA from "react-ga"

const Footer = () => {

  const handleClick = (e, label, url) => {
    e.preventDefault();
    ReactGA.event({
      category: 'Enlace',
      action: 'Clic en enlace',
      label: label
    });
    setTimeout(() => {
      window.location.href = url;
    }, 100);
  }

  return (
    <div className="footer">
        <div className="boxMadeIn">
            <a href="https://www.linkedin.com/in/julian-bellafronte-473a67201/" onClick={(e) => handleClick(e, 'Julián Bellafronte', 'https://www.linkedin.com/in/julian-bellafronte-473a67201/')} target="_blank" rel="noopener noreferrer"><p>Made by <strong>Julián Bellafronte</strong></p></a> 
            <a href="https://www.linkedin.com/in/facundomendez7/" onClick={(e) => handleClick(e, 'Facundo Mendez', 'https://www.linkedin.com/in/facundomendez7/')} target="_blank" rel="noopener noreferrer"><p>Made by <strong>Facundo Mendez</strong> </p></a> 
        </div>
    </div>
  )
}
export default Footer
