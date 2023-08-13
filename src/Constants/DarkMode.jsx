// import  { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// const DarkMode = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     (
//       <>
//       <div className={`container mx-auto p-4 px-8 shadow-xl ${darkMode ? " bg-slate-800 text-white" : "bg-white"}`}>
//             <div>
//                   <button
//           className={`flex gap-2 items-center shadow-xl rounded p-2 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
//           onClick={toggleDarkMode}
//         >
//           <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//             </div>
//       </div>
//       </>
//     )
//   )
// }

// export default DarkMode