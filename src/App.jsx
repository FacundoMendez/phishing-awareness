import './App.css'
import {lazy,Suspense } from 'react';
const Home = lazy(() => import('./components/home/Home'))
const Info = lazy(() => import('./components/Info/Info'))
const Footer = lazy(() => import('./components/footer/Footer'))


function App() {
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
