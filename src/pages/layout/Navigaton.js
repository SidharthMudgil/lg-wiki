import React, { useRef, useEffect } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigaton() {

  const inputRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current.focus();
        document.getElementById("search").style.width = "15rem";
        document.getElementById("search").style.borderRadius = "25px"
        document.getElementById("icon").style.display = "none";
        document.getElementById("iconsub").style.display = "none";
        document.getElementById("iconsubk").style.display = "none";


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
            <span className="add_icon border_start" id="icon"> <i className="fas fa-search"></i>  </span>
            <input
              type="search"
              placeholder="Search..."
              className="   search  "
              ref={inputRef}
              onFocus={() => {
                document.getElementById("search").style.width = "15rem";
                document.getElementById("search").style.borderRadius = "25px"
                document.getElementById("icon").style.display = "none";
                document.getElementById("iconsub").style.display = "none";
                document.getElementById("iconsubk").style.display = "none";


              }}
<<<<<<< HEAD
              id="search"
            />
            <span className="add_icon border_end " id="iconsub"> <div className="icon_background" id="iconsub"> ctrl</div>
              <div className="icon_background" id="iconsubk"> k </div>  </span>

          </li>
          <li
            onClick={() => {
              let id = 1;
=======
              className="py-1 menu-ul "  >
              installation
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
              installation
              <i className="fa fa-caret-down px-3" aria-hidden="true"></i>

              <ul id="2" className="menuex">
                <li className="menutab"><Link to='' >demo text</Link></li>
                <li className="menutab" ><Link to='' >demo text</Link></li>
              </ul>
            </li>
            <li  onClick={() => {
              let id = 3;
>>>>>>> 3b23d5c (added documentation part)
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
<<<<<<< HEAD
        </ul>
      </div>

=======
          </ul>
        
        </div>
        <div>
    <div className="dod">
            Step 1
           
    </div>
    <div>
    <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
            </div>



          













            <div className="dod">
              Step 2
            </div>
            <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
    </div>
    <div>

   
            </div>


              
            <div className="map-container">
            <div>
              <pre>
                
              return object : BoundedMatcher<Object, Map>(Map::class.java{
                })
              
              </pre>
            </div> 
             </div>

            

            <div className="dod">
              Step 3
            </div>
            <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
  
>>>>>>> 3b23d5c (added documentation part)
    </div>
  );
}
