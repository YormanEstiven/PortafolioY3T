import './App.css'
import Header from './components/head/header/Header'
import Navigation from './components/head/nav/Navigation'
import Projects from './components/projects/Projects'
import { Studies } from './components/studies/Studies'

function App() {
  

  return (
    <> 
        <Navigation/>
        <Header/>
        <Projects/>
        <Studies/>
    </>
  )
}

export default App
