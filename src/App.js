import { Routes, Route } from 'react-router-dom';
import './App.css';
import HotelPage from './components/HotelPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/hotels' element={<HotelPage />} />
      </Routes>
    </div>
  );
}

export default App;
