import React from 'react'
import {Link} from 'react-router-dom'

function CountriesList({countries}) {


  return (
    <div>

{CountriesList.map((elem, i) =>
   return (
        <div key={elem.alpha3Code}>
        <Link to={`/countries/${elem.alpha3Code}`}>{elem.name.common}</Link>
        </div>
   )
   )}
   </div>
    
  )
}

export default CountriesList