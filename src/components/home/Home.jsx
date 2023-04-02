import React, { useEffect } from 'react'
import SceneSkull from '../sceneSkull/SceneSkull'
import "./home.css"
import gsap , { Elastic } from 'gsap'
import LineNext from '../../assets/lineNext/LineNext'

const Home = () => {

  useEffect(() => {

      const tl = gsap.timeline()

      tl.to(".preload", {
        opacity: 0,
        delay: 3,
        duration: 1,
      })

      tl.to(".alert", {
        opacity: 1,
        duration: 1,
        scale: 1,
        yPercent: -0,
        ease: Elastic.easeInOut
      })
      
      if (window.innerWidth > 1400) {
        tl.to(".webGlScene", {
          opacity: 1,
          duration: .8,
          yPercent: -4.5,
          ease: Elastic.easeInOut
        })
      } else if (window.innerWidth < 900) {
        tl.to(".webGlScene", {
          opacity: 1,
          duration: .8,
          yPercent: -3,
          ease: Elastic.easeInOut
        })
      }

      tl.to(".subtitle", {
        opacity: 1,
        duration: 2,
        scale: 1,
        yPercent: -30,
        ease: Elastic.easeInOut
      })


  },[])

  return (
    <>
    <div className="home" >
        <h1 className='alert'>ALERTA!</h1>


        <div className="box-scroll">
          <div className="column-box-iz"></div>
          <SceneSkull/>
          <div className="column-box-der"></div>
        </div>

        <div className="subtitle">
          <div className="subtile-box">
           <span className='subtitle-box_caiste'>Caíste en un simulacro de  </span>
           <strong>Phishing</strong>
          </div>
          <p>Te compartimos unos pequeños tips para prevenir </p>
        </div>
        <LineNext/>
    </div>
    
    </>
  )
}

export default Home