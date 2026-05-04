import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentInfo from './studentinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StudentInfo fname="Sarthak" age="21" course="AIML" />
     <counter />
    </>
  )
}

export default App
