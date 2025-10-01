import React from 'react'

import Header from './assets/components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import About from './pages/About'
import Loader from './pages/Loader'
import Home from './pages/Home'
import Project from './pages/Project'
import Marque from './pages/Marque'


const App = () => {

  return (
    <>
      <div id="main">

        <Header />
        <Home />
        <Marque/>
        <About />
        <Page2 />
        <Page3 />
        <Project />
        <Loader />
      </div>
    </>
  )
}

export default App