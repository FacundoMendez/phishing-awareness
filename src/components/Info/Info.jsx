import React from 'react'
import DiviLine from '../../assets/diviLine/DiviLine'
import LineNext from '../../assets/lineNext/LineNext'
import "./info.css"
import InfoList from './InfoList'

const Info = () => {
  return (
    <section className='info' >
        <h2 className='title_hero'>Acabas de caer en un Phishing, pero para tu suerte, esto no es más que una pequeña simulación de concientización.</h2>
        <div className="container-info_text">
          <p>Los phishings o estafas tienen la apariencia de proceder de fuentes de confianza pero en realidad pretenden manipular al receptor para robar información confidencial.
          Según la empresa de seguridad empresarial Proofpoint más del 99% de los robos cibernéticos hoy día son activados por humanos, como en este momento que caíste en un fraude escaneando un QR y entrando a una página sin saber su procedencia ni su contenido.
          </p>
          <strong>Así que, cuidado la próxima vez que estés por ingresar a un sitio web.</strong>
        </div>
        <DiviLine/>

        <span>Si te interesa saber más sobre cómo evitar caer en un fraude, debajo encontrarás consejos: </span>

        <LineNext/>
        <InfoList/>
        <LineNext/>

        <div className="awareness">
          <h2>Educa a otros sobre el PHISHING</h2>
          <p>El phishing es una amenaza que afecta a todos, y educar a otros sobre cómo reconocer y evitar el phishing es esencial para protegerse a sí mismo y a los demás. Comparte información sobre el phishing y sus técnicas con amigos, familiares y colegas para ayudarles a mantenerse seguros en línea.</p>
        </div>
        <DiviLine/>
    </section>
  )
}

export default Info