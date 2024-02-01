import React ,{useRef,useEffect}from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigaton() {
  
  const inputRef = useRef(null);
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'k') {
          e.preventDefault();
          inputRef.current.focus();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);

  function menubar(x) {
    let id = document.getElementById(x);
    let dis = getComputedStyle(id);
    if (dis.display == "none") {
      document.getElementById(x).style.display = "block";
    } else {
      document.getElementById(x).style.display = "none";
    }
  }
  return (
    <div>

      <div className="left float-left h-screen ">
        {/* <p className="py-1"> Get Started </p> */}

        <ul className="menu ">
          <li >
            <span className="add_icon border_start"> <i className="fas fa-search"></i>  </span>
            <input
              type="search"
              placeholder="Search..."
              className="   search  "
            ref={inputRef}
              
            />
            <span className="add_icon border_end"> <div className="icon_background"> ctrl</div> 
            <span className=" "><div className="icon_background"> k </div> </span> </span>

          </li>
          <li
            onClick={() => {
              let id = 1;
              menubar(id);
            }}
            className="py-1 menu-ul "  >
            installition
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>

            <ul id="1" className="menuex">
              <li className="menutab"> <Link to='nav' >demo text</Link></li>
              <li className="menutab"><Link to='/' >demo text</Link></li>
            </ul>
          </li>
          <li
            onClick={() => {
              let id = 2;
              menubar(id);
            }}
            className="py-1  menu-ul "
          >
            installition
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>

            <ul id="2" className="menuex">
              <li className="menutab"><Link to='' >demo text</Link></li>
              <li className="menutab" ><Link to='' >demo text</Link></li>
            </ul>
          </li>
          <li onClick={() => {
            let id = 3;
            menubar(id);
          }}
            className="py-1 menu-ul ">
            Quickstart
            <i className="fa fa-caret-down px-3" aria-hidden="true"></i>
            <ul id="3" className="menuex">
              <li className="menutab" ><Link to='' >demo text</Link> </li>

              <li className="menutab"> <Link to='' >demo text</Link> </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  );
}
