import './App.css'
import {lazy,Suspense, useEffect } from 'react';
import emailData from './assets/emailData/emailData';
const Home = lazy(() => import('./components/home/Home'))
const Info = lazy(() => import('./components/Info/Info'))
const Footer = lazy(() => import('./components/footer/Footer'))


function App() {

  useEffect(() => {
    emailData()
  },[])

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
