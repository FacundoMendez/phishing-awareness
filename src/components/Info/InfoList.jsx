import React from 'react'
import DiviLine from '../../assets/diviLine/DiviLine'

const InfoList = () => {

    const list = [
        {
            title:"Leer la dirección de página",
            description: "Cuando leemos un enlace o escaneamos un código QR, es esencial verificar la dirección de la página web antes de hacer click. Si pasamos el cursor sobre la dirección del enlace o escaneamos el código QR, podemos analizar la URL para detectar cualquier anomalía. Por ejemplo, si utilizamos Facebook, la dirección de la página web legítima es www.facebook.com. Sin embargo, los cibercriminales pueden crear una dirección de página similar que nos lleve a un sitio web falso, donde puedan robar información. Una URL falsa puede parecerse a la legítima, como www.faceb00k.com. Aunque pueda parecer fácil reconocer este tipo de fraudes, a veces un pequeño descuido puede llevarnos a una página web fraudulenta sin que nos demos cuenta. ",
            description2: "",
            description3: ""
        },
        {
            title:"Observar dirección de correo electrónico.",
            description: "Al igual que en el caso de las páginas web, es crucial verificar la dirección de correo electrónico antes de abrir cualquier correo sospechoso. Si recibimos un correo electrónico supuestamente del banco, por ejemplo, podemos analizar cuidadosamente la dirección del remitente para detectar cualquier anomalía. Los cibercriminales a menudo crean direcciones de correo electrónico falsas que se parecen a las legítimas, cambiando letras por números o agregando símbolos, para engañar a las víctimas y hacerles creer que están tratando con una fuente confiable. Si nuestro banco tiene de dirección de correo tubanco@credito.com un atacante podría utilizar uno similar como tub4nc0@credto.com, mandándonos que completamos una planilla con nuestros datos donde luego los recibe y logra su cometido.",
            description2: "",
            description3: "",
        },
        {
            title:"Mantén tu software actualizado.",
            description: "Mantener tu sistema operativo, navegador web y software de seguridad actualizados es crucial para evitar el phishing. Las actualizaciones de software a menudo incluyen correcciones de seguridad que pueden protegerte contra nuevas amenazas de phishing.",
            description2: "",
            description3: "",
      },
      {
          title:"Verifica la autenticidad de los sitios web.",
          description: "Antes de ingresar información personal o financiera en un sitio web, verifica si el sitio es auténtico. Busca el icono de candado verde en la barra de direcciones del navegador, que indica que el sitio web está utilizando un certificado SSL válido. También puedes verificar si la dirección del sitio web comienza con https, lo que indica que el sitio web está utilizando un protocolo de transferencia seguro.",
          description2: "",
          description3: "",
      },
      {
          title:"Utiliza la autenticación de dos factores.",
          description: "La autenticación de dos factores (2FA) es una medida de seguridad que agrega una capa adicional de protección a tus cuentas en línea. Siempre que sea posible, habilita la autenticación de dos factores en tus cuentas para evitar que los cibercriminales accedan a tus cuentas incluso si tienen tus credenciales de inicio de sesión.",
          description2: "",
          description3: "",
      },
      {
          title:"Usa contraseñas seguras y únicas.",
          description: "Las contraseñas seguras y únicas son esenciales para proteger tus cuentas en línea contra el phishing. Por ejemplo, una contraseña de 11 dígitos numéricos puede ser vulnerada en solo 2 segundos, pero si creamos una contraseña de 11 dígitos entre los cuales se encuentran números, letras minusculas y mayusculas, y símbolos especiales, un atacante tardaría en promedio 400 años para vulnerar esta contraseña. Por último, considera el uso de un administrador de contraseñas para generar contraseñas aleatorias y almacenarlas de manera segura.",
          description2: "",
          description3: "",
      },
      {
          title:"Desconfía de los mensajes urgentes.",
          description: "Los mensajes que intentan generar urgencia o miedo son una técnica común utilizada por los ciberdelincuentes. Si recibes un mensaje urgente que te pide que actúes inmediatamente, tómate un momento para verificar la autenticidad del mensaje antes de hacer clic en cualquier enlace o proporcionar información personal.",
          description2: "",
          description3: "",
      }
    ]


  return (
    <div className="Info-list">
          <ul>
            {
                list.map((index , key) =>{
                    return <li key={key}> 
                              <h2>{index.title}</h2>  
                              <p>{index.description}</p> 
                              <DiviLine/>
                            </li>
                })
            }
            
          </ul>
        </div>

  )
}

export default InfoList
