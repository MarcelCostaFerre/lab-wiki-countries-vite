import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const [country, setCountry] = useState();
  const { alpha3Code } = useParams();
//   let contryFlag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
  

  useEffect(() => {
    // para llamar a una api usamos el useffect, solo haremos una llamada
    fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setCountry(data);
        
      });
  }, [alpha3Code]);
  
  return (
    <>
      <h2>Country Details</h2>

      {!country ? (
        <h2>Loading...</h2>
      ) : (
        
        <>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
          <h2>{country.name.common}</h2>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
          <p>
            <b>Area:</b> {country.area} Km²
          </p>
          <p>
            <b>Borders:</b>
          </p>
          <ul>
          {country.borders.map((border) => {
            return (
               
                <li key={country._id}><Link to={`/${border}`}>{border}</Link></li>
              
            );
          })}</ul>
        </>
      )}

      {/* <h2>{country.name.common}</h2>
      <p><b>Capital:</b> {country.capital}</p>
      <p><b>Area:</b> {country.area}</p>
      <p><b>Borders:</b></p>
      {country.borders.map((border) => {
        return (
          <ul key={country._id}>
            <li>{border}</li>
          </ul>
        );
      })} */}
    </>
  );
}

export default CountryDetails;
