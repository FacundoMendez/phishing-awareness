import './App.css'
import {lazy,Suspense, useEffect } from 'react';
import emailData from './assets/emailData/emailData';

const Home = lazy(() => import('./components/home/Home'))
const Info = lazy(() => import('./components/Info/Info'))
const Footer = lazy(() => import('./components/footer/Footer'))

/* 
const GOOGLE_ANALYTICS_ID = "G-561KGVHG3D";

ReactGA.initialize(GOOGLE_ANALYTICS_ID);
ReactGA.send({ hitType: "pageview", page: "https://phiapp.vercel.app/" });
 */

function App() {

/*   useEffect(() => {
    emailData()

  },[]) */

  return (
    <Suspense fallback={[]}>
      <div className="App">
          <Home/>
          <Info/>
          <Footer/>
      </div>
    </Suspense>
  )
}

export default App
