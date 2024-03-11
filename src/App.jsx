import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
