import { useEffect, useState } from "react";
import BASE_URL from "../Constants/Base_url.js";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("all");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  useEffect(() => {
    if (search) {
      fetch(`${BASE_URL}/name/${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCountries(data);
          }
        })
        .catch((error) => console.error("Xato yuz berdi:", error));
    }
  }, [search]);

  useEffect(() => {
    if (region !== "all") {
      fetch(`${BASE_URL}/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCountries(data);
          }
        })
        .catch((error) => console.error("Xato yuz berdi:", error));
    }
  }, [region]);

  const handleRegionFilter = (selectedRegion) => {
    setRegion(selectedRegion);
  };

 

  return (
    <>
      <div className={`container mx-auto p-4 px-8  ${darkMode ? "dark" : ""}`}>
        <div className="flex justify-between items-center mb-4">
          <input
            className={`border-y-slate-400 text-black outline-none  bg-slate-200 p-2 px-4 rounded shadow-2xl ${darkMode ? "dark" : ""}`}
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Your Country"
          />

          <select
            className={` bg-slate-200 text-blue-950 outline-none p-2 ${darkMode ? "dark" : ""}`}
            onChange={(e) => handleRegionFilter(e.target.value)}
            value={region}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>

          
        </div>

        <div className="grid grid-cols-4 gap-8  ">
          {countries.map((country) => (
            <Link
              key={country.cca3}
              to={`/countries/${country.name.common}`}
              className={darkMode ? "text-white" : "text-black"}
            >
              <div className="w-[350px] h-[320px] rounded shadow-xl">
                <img
                  className="w-full h-[200px] rounded"
                  src={country.flags?.png}
                  alt=""
                />
                <h1 className="ml-3 text-lg font-medium">
                  {country.name.common}
                </h1>
                <p className="ml-3">
                  <strong>Capital : </strong>
                  {country.capital}
                </p>
                <p className="ml-3">
                  <strong>Region : </strong>
                  {country.region}
                </p>
                <p className="ml-3">
                  <strong>Population :</strong> {country.population}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
