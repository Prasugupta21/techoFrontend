import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import Services from './components/Services';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {

  return (
    <> 
    <Header/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>


    </Routes>
  
    </>
  )
}

export default App
