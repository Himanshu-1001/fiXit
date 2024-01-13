import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Navbar/Banner/Banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/chat' element={<Banner />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
