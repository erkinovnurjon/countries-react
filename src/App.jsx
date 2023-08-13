import  { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import Search from "./pages/Search";



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "bg-slate-800 text-white" : "bg-white"}`}>
        <Header/>
        <Search />
        <Routes>
          <Route path="/" element={<Home  />} />
         
          <Route path="/countries/:name" element={<SingleCountry darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


