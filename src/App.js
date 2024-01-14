import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/chat' element={<Search />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
