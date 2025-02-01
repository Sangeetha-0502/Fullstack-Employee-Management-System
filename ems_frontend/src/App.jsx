
import './App.css'
import EmployeComponent from './components/EmployeComponent'
import EmployeeSearch from './components/EmployeeSearch'
import Footer from './components/Footer'
import HeaderComponent from './components/Header'
import ListOfEmployees from './components/ListOfEmployees'
import {BrowserRouter, Route, Routes} from 'react-router-dom'



function App() {
  return( <>
    <BrowserRouter>
  <HeaderComponent/>

  <Routes>
    //http://localhost:3000
    <Route path='/' element={<ListOfEmployees/>} ></Route>

    //http://localhost:3000/employees
    <Route path='/employees' element={<ListOfEmployees/>}></Route>

    //http://localhost:3000/add-employe
    <Route path='/add-employe' element={<EmployeComponent/>}></Route>

    //http://localhost:3000/update-employe1
    <Route path='/update-employe/:id' element={<EmployeComponent/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
  
}

export default App
