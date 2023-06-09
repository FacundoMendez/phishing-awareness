import React from 'react'
import "./footer.css"
import { ga } from "react-ga"

const Footer = () => {

  const handleClick = (label, value , action) => {
    ga('send', 'event', 'Linkedin', label, action, value);
  };

  return (
    <div className="footer">
      <div className="boxMadeIn">
        <a
          href="https://www.linkedin.com/in/julian-bellafronte-473a67201/"
          onClick={() => handleClick('Julian_Bellafronte', 1 , "Linkedin_Julian")}
          target="_blank"
          rel="noopener noreferrer">
          <p>Made by <strong>Julián Bellafronte</strong></p>
        </a>

        <a
          href="https://www.linkedin.com/in/facundomendez7/"
          onClick={() => handleClick('Facundo_Mendez', 2, "Linkedin_Facundo")}
          target="_blank"
          rel="noopener noreferrer">
          <p>Made by <strong>Facundo Mendez</strong> </p>
        </a>
      </div>
    </div>
  )
}
export default Footer
