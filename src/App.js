import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countriesJSON from "./countries.json"
import {useState} from 'react'
import {Routes, Route} from "react-router-dom"

function App() {
 const [country, setCountry] = useState(countriesJSON)
  return (
    <div className="App">
<Navbar/>

<CountriesList />

<CountryDetails />
<Routes>
  <Route path='/countries' element={<CountriesList countries={countries}/>}/>
  <Route path='/countries/:alpha' element={<CountriesDetails/>}/>
</Routes>


    </div>
   
  );
}

export default App;
