import React from 'react'
import "./footer.css"
import { ga } from "react-ga"

const Footer = () => {

  const handleClick = (label, valu) => {
    ga('send', 'event', 'Linkedin', label, "linkedin_link", valu);
  };

  return (
    <div className="footer">
      <div className="boxMadeIn">
        <a
          href="https://www.linkedin.com/in/julian-bellafronte-473a67201/"
          onClick={() => handleClick('Julian_Bellafronte', 1)}
          target="_blank"
          rel="noopener noreferrer">
          <p>Made by <strong>Julián Bellafronte</strong></p>
        </a>

        <a
          href="https://www.linkedin.com/in/facundomendez7/"
          onClick={() => handleClick('Facundo_Mendez', 2)}
          target="_blank"
          rel="noopener noreferrer">
          <p>Made by <strong>Facundo Mendez</strong> </p>
        </a>
      </div>
    </div>
  )
}
export default Footer
