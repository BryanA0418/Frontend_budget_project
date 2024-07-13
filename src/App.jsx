import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from "./Components/NavBar"
import Home from './Pages/Home'
import Index from './Pages/Index'
import Show from "./Pages/Show"
import Edit from './Pages/Edit'
import New from './Pages/New'
import FourOFour from './Pages/FourOFour'

function App() {
  

  return (
    <div className='container'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/transactions' element={ <Index/> } />
            <Route path='/transactions/:id' element={ <Show/> } />
            <Route path='/transactions/:id/edit' element={ <Edit/> } />
            <Route path='/transactions/new' element={ <New/> } />
            <Route path='*' element={ <FourOFour/> } />
          </Routes>
        </main>
      </Router>
  </div>
  )
}

export default App
