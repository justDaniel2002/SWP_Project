import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './Page/HomePage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage/>}/> {/* home page */}
        <Route path='/signIN'>
          <Route path='/resetPw'/>{/* lay lai mk neu quen  */}
        </Route> {/* sign in page */}
        <Route path='/signUp'/> {/* sign up page */}
        <Route path="userProfile"/>
        <Route path='/about'/>{/* about page show up general infomatio nabout web */}
        <Route path='contact'/>{/* page to contact with admin */}
        <Route path='/coursePage'/> {/* page show up list of course */}
        <Route path='/admin'>
          <Route path='/userControl'/>
          <Route path='/courseControl'/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
