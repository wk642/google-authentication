import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import GoogleLanding from './GoogleLanding'
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<GoogleLanding />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
