import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import About from './About'
import UserInfo from './UserInfo'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Navbar/>
<Routes>
  <Route path="/" element=<Home/> />
  <Route path="/about" element=<About/> />
  <Route path="/userinfo" element=<UserInfo/> />
  <Route path="*" element={<h1>Page Not Found</h1>} />
  
</Routes>
</>
  )
}

export default App
