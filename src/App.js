import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Home from 'pages/Home'
import AboutMe from 'pages/AboutMe'
import Skills from 'pages/Skills'
import Projects from 'pages/Projects'
import Contact from 'pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
