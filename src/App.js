import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';
import { fetchContinents } from './redux/continents/continentsSlice';
import { fetchCountries } from './redux/countries/countriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContinents());
    dispatch(fetchCountries());
  }, [dispatch]);

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
