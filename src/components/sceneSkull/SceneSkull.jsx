import React, { useEffect } from 'react'
import { Scene, PerspectiveCamera, WebGLRenderer, Clock, sRGBEncoding } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import skull from "./skullGltf/skull2.glb"
import gsap from 'gsap';


const SceneSkull = () => {

    useEffect(() => {

    const canvas = document.querySelector('.webGlScene');
    /* scene setup */
    const scene = new Scene();
        

    const size = {
      width :  480,
      height : 600
    }
    
    window.addEventListener ('resize', () => {
        size.width = window.innerWidth
        size.height = window.innerHeight
    
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()

        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


        
    /* camera  */
    const camera = new PerspectiveCamera(64, size.width / size.height, 1, 1000);
    
    if (window.innerWidth > 1400) {
        camera.position.z = -2.5;
      } else if (window.innerWidth < 900 && window.innerWidth > 410) {
        camera.position.z = -2.6;
      }else if (window.innerWidth <= 410) {
        camera.position.z = -3;
      }

    camera.position.y = .9
    scene.add(camera);

    



    /* renderer */

    const renderer = new WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
    });
    
    renderer.preserveDrawingBuffer = false;
    renderer.outputEncoding = sRGBEncoding;
    renderer.setSize(size.width, size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))





    /* scene gltf */
    let skullModel;
    let bocaObj;
        
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
        
    gltfLoader.load(skull, (gltf) => {
        skullModel = gltf.scene;
        scene.add(skullModel);
        skullModel.rotation.y = Math.PI 
        skullModel.scale.set(.9,.9,.9)

        gltf.scene.traverse((obj) => {
            if (obj.name === 'boca') {
              bocaObj = obj;
            }
          });
         
        
        // Agregar eventos al canvas por separado
        canvas.addEventListener('touchmove', function(event) {
          event.preventDefault();
          event.stopPropagation();
        }, { passive: false });
        
        canvas.addEventListener('scroll', function(event) {
          event.preventDefault();
          event.stopPropagation();
        }, { passive: false });
    })

    

    const scrollEffect = () => {
        if (bocaObj) {
            const tl = gsap.timeline();

            tl.to(bocaObj.position, {
                z: -.25, // Mover la boca 100 unidades hacia abajo
                duration: 1
            });
            tl.to(bocaObj.position, {
                z: 0, // Mover la boca de vuelta a su posición original
                duration: 1,
            });
        }
    }
       
        
    const controls = new OrbitControls(camera, canvas)

    controls.enableDamping = true
    controls.enableZoom = false 
    controls.enablePan = false

    // ajusta la velocidad de amortiguamiento
    controls.dampingFactor = 0.04
    controls.rotateDampingFactor =  0.02



    /* optimizacion para que se ejecute la animacion solo cuando se ve en el viewport */
    let clock = new Clock();

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resumeAnimation();
        } else {
          pauseAnimation();
        }
      });
    }, options);

    observer.observe(canvas);
    

    let animationId;

    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);

    };

    const resumeAnimation = () => {

      const animate = () => {
        controls.update();

        const elapsedTime = clock.getElapsedTime();
        if (skullModel) {
          skullModel.position.x = Math.sin(elapsedTime) / 10;
          skullModel.position.y = Math.cos(elapsedTime) / 6;
          skullModel.rotation.x = Math.cos(elapsedTime) / 11;
        }
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
        renderer.autoClear = true;
      };
      
      animate();
    };

        
    return () => {
        // Limpiar memoria, CPU y GPU
        renderer.dispose();
        scene.remove(skullModel);
        gltfLoader.dispose();
        dracoLoader.dispose();
      };

    }, [])

  return (
    <canvas className='webGlScene'></canvas>
  )
}

export default SceneSkull