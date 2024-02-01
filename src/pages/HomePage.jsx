import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // para llamar a una api usamos el useffect, solo haremos una llamada
    fetch("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCountries(data);
      });
  }, []);
  return (
    <>
      <h2>WikiCountries: Your Guide to the World</h2>
      {countries.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        countries.map((country) => {
            
          return (
            <div key={country._id}>
              <ul>
                <li><Link to={country.alpha3Code}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} /> {country.name.common}</Link></li>
              </ul>
              
            </div>
          );
        })
      )}
    </>
  );
}

export default HomePage;
