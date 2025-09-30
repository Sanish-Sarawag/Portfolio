import React from 'react'

import Header from './assets/components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import About from './pages/About'
import Loader from './pages/Loader'
import Home from './pages/Home'
import Page5 from './pages/Page5'
import Project from './pages/Project'


const App = () => {

  return (
    <>
      <div id="main">

        <Header />
        <Home />
        <Page2 />
        <Page3 />
        <Project />
        <About />
        <Loader />
        <Page5/>
      </div>
    </>
  )
}

export default App