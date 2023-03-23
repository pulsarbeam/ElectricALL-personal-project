import Home from './Home'
import Customer from './Customer'
import Coc from './Coc'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="container, has-text-centered">
        <h1 className="title">ElectricALL</h1>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/coc" element={<Coc />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
