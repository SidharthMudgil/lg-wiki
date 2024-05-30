import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navigaton from "./Navigaton";

export default function Layout() {
  const [display, setDisplay] = useState('block');

  const handleClick = () => {

    setDisplay(display === 'block' ? 'none' : 'block');
    document.getElementById('leftn').style.display=display;
   

  };
  return (
    <>
      <div className="main h-screen  ">

        <Navigaton />
        <div className="h-screen main-docs overflow-auto p-12   scroll-smooth relative">
          <Outlet />
            
       
        </div>
        {/* button add  for user input  and hole css with tailwind use  */}
        <Link to="/input">
        <button className="absolute button-AddInput " >add</button>
        </Link>
        <button className="absolute button-nav-add button-AddInput   " onClick={handleClick}>NAV</button>
      </div>
     
    </>
  );
}
 // const [resolution, setResolution] = useState();
  // const [data, setData] = useState([]);
  // const [suggestions, setSuggestions] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //tempory data for search

  // const fetchData = async () => {
  //   try {
  //     const queries = [Query.equal("status", "active")];
  //     // Assuming uploadService is defined elsewhere
  //     const response = await uploadService.getPosts(queries);
  //     const document = response.documents;
  //     setData(document);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // moblie function
//   function Resizewin() {
//     const res = window.innerWidth;
//     if (res >= 320 && res <= 768) {
//       setResolution(true);
//       document.getElementById("mob-src-d").style.display="block";
//     } else if (res >= 768 && res <= 1930) {
//       setResolution(false);
//       document.getElementById("mob-src-d").style.display="none";
//     }
//   }
//   useEffect(() => {
//     Resizewin();
//     window.addEventListener("resize", Resizewin);
//   });
//   const handleClick = () => {
//     setDisplay(display === "block" ? "none" : "block");
//     document.getElementById("leftn").style.display = display;
//   };

//   const inputRef = useRef(null);

//   const handleChange = (e) => {
//     menubar(e.target.value);
// };
// const handleSearch = (event) => {
//   const searchTerm = event.target.value.toLowerCase();

//   // Check if data exists before filtering
//   if (data) {
//     const filteredData = data.filter((item) =>
//       item.title.toLowerCase().includes(searchTerm)
//     );

//     // Set suggestions based on filtered data
//     if (searchTerm !== "") {
//       setSuggestions(filteredData);
//     } else {
//       setSuggestions([]);
//     }
//   }
// };

        {/* <div className="menu-search-div " id="mob-src-d">
        <input
          type="search"
          placeholder="Search..."
          className="main_search menu-search focus:outline-none"
          ref={inputRef}
          onChange={handleSearch}
          id="search"
        />
<div className="suggestion text-white">
                {suggestions.map((item, index) => {
                  return (
                    <Link to={`/docs/dynamic#${item.$id}`} key={item.$id}>
                      <div className="suggestion-item"> {item.title}</div>
                    </Link>
                  );
                })}
              </div>
      </div>
    */}