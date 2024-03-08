import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
