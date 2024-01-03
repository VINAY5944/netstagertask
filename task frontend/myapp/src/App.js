import logo from './logo.svg';
import './App.css';
import Alltask from './components/Alltask';
import react from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Newtask from './components/Newtask';
import Update from './components/Update';
function App() {
  return (

<BrowserRouter>
    <Routes>
   
    <Route   element={<Alltask/>}  path='/' />

    <Route   element={<Update/>}  path='/update/:id' />
    <Route   element={<Newtask/>}  path='/createnew' />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
