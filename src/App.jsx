import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact-me' element={<ContactMe />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
      <Header />
    </>
  )
}

export default App
