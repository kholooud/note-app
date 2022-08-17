import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import NotFound from './Components/NotFound';
function App() {
  return (
    < >
     
    <Navbar/>

    <Routes>
    <Route path='note-app/' element={<Login/>}/>
      <Route path='note-app/home' element={<Home/>}/>
      <Route path='note-app/register' element={<Register/>}/>
      <Route path='note-app/login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>
  );
}

export default App;
