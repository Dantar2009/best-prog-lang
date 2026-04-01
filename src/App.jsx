import { BrowserRouter, Routes, Route } from 'react-router-dom'  // 👈 только BrowserRouter, Routes, Route
import Home from './Home'
import SignIn from './SignIn'
import Register from './Register'
import Prov from './context/Prov'

function App() {
    return (
      <BrowserRouter>
        <Prov>
          <Routes>   {/* 👈 Routes, не Router */}
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
            </Routes>
          </Prov>
        </BrowserRouter>
    )
}

export default App