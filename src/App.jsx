


import './App.css';
import Navbar from './components/Navbar/Navbar'
import {  Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Pages/Home';
import Admission from './components/Pages/Admission'
import Faculty from './components/Pages/Faculty'
import Eca from './components/Pages/Eca'
import SignUp from './components/Pages/Signup'
import Notice from './components/Pages/Notice';

function App() {
  return (
    <>
     <div className='w-full h-100vh overflow-hidde'>
      <Navbar/>
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="/Admission" element={<Admission />} />
        <Route path='/Faculty' element={<Faculty />} />
        <Route path='/Eca' element={<Eca />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Notice' element={<Notice />} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    </div>
    </>
  
  );
}

export default App;
