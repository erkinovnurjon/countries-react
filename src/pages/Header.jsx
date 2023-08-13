import  { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  

  return (
    <div className={`container mx-auto p-4 px-8 shadow-xl ${darkMode ? " bg-slate-800 text-white" : "bg-white"}`}>
       
      <div className="flex justify-between items-center ">
        <h1 className=" md:block">Where In the World</h1>
        <button
          className={`flex gap-2 items-center shadow-xl rounded p-2 ${darkMode ? "bg-white text-black" : "bg-slate-800 text-white"}`}
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
