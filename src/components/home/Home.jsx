import React, { useEffect , useState} from 'react'
import SceneSkull from '../sceneSkull/SceneSkull'
import "./home.css"
import gsap , { Elastic } from 'gsap'
import LineNext from '../../assets/lineNext/LineNext'
import Preload from '../preload/Preload'


const Home = () => {
  const [isLoader , setIsLoader] = useState(false)

  useEffect(() => {

      const tl = gsap.timeline()
      /* effect tv */

      tl.to(".title_preload", {
        duration: .5,
        opacity:1,
        ease: Elastic.easeInOut
      })
  
      tl.to(".title_preload", {
        delay: 2,
        opacity: 0,
        duration: 1,
      })
        
      tl.to(".tv",{
        duration:1,
        opacity:1,
        scaleX:"+= 105"
      })
      
     
      tl.to(".tv",{
          duration:2.5,
          scaleY:"+= 1500",
      })
        
      gsap.to(".preload", {
        opacity: 0,
        delay:4.9,
        onComplete: () => setIsLoader(true)
      })


  },[setIsLoader])

  return (
    <>
    {
      !isLoader && <Preload/>
    }
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
          {/*  <marquee>Phishing</marquee> */}
           
           <div className="glitch" data-text="PHISHING">PHISHING</div> 

          </div>
          <p className='tips-text'>Te compartimos unos pequeños tips para prevenir </p>
        </div>
        <LineNext/>
    </div>
    
    </>
  )
}

export default Home