import Navbar from "./components/navbar.jsx"
import Intro from "./components/intro.jsx"
import About from "./components/about.jsx"
import Portfolio from "./components/portfolio.jsx"
import Contact from "./components/contact.jsx"
import Proyectos from "./components/projects.jsx"
import './App.scss'

function App() {

  return (
    <>
    <Navbar />
    <Intro />
    <About />
    <Portfolio />
    <Proyectos />
    <Contact />
    </>
  )
}

export default App