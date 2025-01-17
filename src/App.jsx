import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage';
import Services from './components/Services';
import Header from './components/Header';

function App() {

  return (
    <> 
    <Header/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<Services/>}/>


    </Routes>
  
    </>
  )
}

export default App
