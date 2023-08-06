import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path=":continent" element={<CountriesPage />} />
          <Route path=":continent/:countryName" element={<CountryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
