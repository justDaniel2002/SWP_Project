import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/> {/* home page */}
        <Route path='/signIN'/> {/* sign in page */}
        <Route path='/signUp'/> {/* sign up page */}
        <Route path='/'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
