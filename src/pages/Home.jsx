import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Xato yuz berdi:", error));
  }, []);

  return (
  <div className="container mx-auto px-8 p-4 my-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {countries.map((country) => (
      <Link
        key={country.cca3}
        to={`/countries/${country.name.common}`}
        className={darkMode ? "text-white" : "text-black"}
      >
        <div className="w-full h-[320px] rounded shadow-xl">
          <img className="w-full h-[200px] rounded" src={country.flags.png} alt="" />
          <h1 className="ml-3 text-lg font-medium">{country.name.common}</h1>
          <p className="ml-3"><strong>Capital:</strong> {country.capital}</p>
          <p className="ml-3"><strong>Region:</strong> {country.region}</p>
          <p className="ml-3"><strong>Population:</strong> {country.population}</p>
        </div>
      </Link>
    ))}
  </div>
</div>

  );
};

export default Home;





