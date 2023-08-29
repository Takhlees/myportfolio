import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <div className='app'>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <div className='app-btn'>
          <button onClick={handleTop}>↑</button>
        </div>
        <footer>
          <div className="footer">
            <h3>Takhlees Fatima</h3>
            <p>Copyright 2023. All rights are reserved</p>
          </div>
        </footer>
      </div>
    </>

  );
}

export default App;
