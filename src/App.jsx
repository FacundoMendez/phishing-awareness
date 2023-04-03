import './App.css'
import { useEffect, useRef , lazy,Suspense } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
const Home = lazy(() => import('./components/home/Home'))
const Info = lazy(() => import('./components/Info/Info'))
const Footer = lazy(() => import('./components/footer/Footer'))


function App() {
  const scrollRef = useRef(null);

  useEffect(() => {

      if (scrollRef.current) {
        new LocomotiveScroll({
          el: scrollRef.current,
          inertia: 0.8,
          smooth: true,
          getDirection: true,
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
