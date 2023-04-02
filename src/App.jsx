import './App.css'
import { useEffect, useRef , lazy,Suspense } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
const Info = lazy(() => import('./components/Info/Info'))
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Preload from './components/preload/Preload';

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
          <Preload/>
          <Home/>
          <Info/>
          <Footer/>
      </div>
    </Suspense>
  )
}

export default App
