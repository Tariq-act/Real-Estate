import { Route, Routes } from 'react-router-dom';
import './App.css';
import Favourite from './pages/home/favourite/favourite.page';
import Home from './pages/home/home.page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
