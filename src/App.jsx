import './App.css'
import { useEffect, useRef , lazy,Suspense, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
const Info = lazy(() => import('./components/Info/Info'))
const Footer = lazy(() => import('./components/footer/Footer'))

import Home from './components/home/Home';


function App() {
  const scrollRef = useRef(null);

  useEffect(() => {

      if (scrollRef.current) {
        new LocomotiveScroll({
          el: scrollRef.current,
          inertia: 0.8,
          smooth: true,
          smoothMobile: true,
          getDirection: true,
          mobile: {
            smooth: true,
            inertia: 0.8,
            getDirection: true,
          },
          tablet: {
            smooth: true,
            inertia: 0.8,
            getDirection: true,
          },
        });
      }
  }, []);

  return (
    <Suspense fallback={[]}>
      <div className="App" ref={scrollRef} >
          <Home/>
          <Info/>
          <Footer/>
      </div>
    </Suspense>
  )
}

export default App
