import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Design from './Design'
import Moreinformation from './Moreinformation'


export default function App() {
  return (
   
          <div>
           
             <h3>welcome to MS workshop page </h3>
  
          <BrowserRouter>
           <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/moreinformation" element={<Moreinformation/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
}
