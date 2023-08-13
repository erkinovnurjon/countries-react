import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <div className={`container mx-auto px-8 p-4 ${darkMode ? "dark" : ""}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${darkMode ? "dark" : ""}`}>
        <div className="md:col-span-1">
          <img className=" w-[500px] " src={country.flags?.png} alt="" />
        </div>
        <div className="md:col-span-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">{country.name?.official}</h1>
          <p className="mb-2">{country.altSpellings?.join(", ")}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p className="mb-2"><strong>Region:</strong> {country.subregion}</p>
          <p className="mb-2"><strong>Population:</strong> {country.population}</p>
          <p className="mb-2"><strong>Borders:</strong> {country.borders?.join(", ")}</p>
          <p className="mb-2"><strong>Language:</strong> {country.languages ? Object.keys(country.languages).join(", ") : ""}</p>
          <p className="mb-2"><strong>Area:</strong> {country.area} km²</p>
        </div>
      </div>

      
        <Link
        to="/"
        className="  "
      >
        <button className=" bg-red-400 hover:bg-red-700 hover:text-white transition-all px-5 py-2 rounded-xl mt-10 ">
          back
        </button>
      </Link>
      
    </div>
  );
};

export default SingleCountry;
