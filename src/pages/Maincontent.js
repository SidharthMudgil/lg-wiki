import Contribute from "./Contribute";
import lg from "./lg.png";
import "./Main_content.css";

export default function Maincontent() {
  return (
    <div>
      <div className="back">
        <nav className="bg-transparent  font-semibold   text-lg ">
          <ul className="flex justify-end space-x-11 items-center py-4 px-20">
            <li className="nav-li">
              <a href="http://">Home</a>
            </li>
            <li className="nav-li">
              <a href="http://">lG Architecture </a>
            </li>

            <li className="nav-li">
              <a href="http://">Contributors</a>
            </li>
            <li className="nav-li">
              <a href="http://">CodeSamples</a>
            </li>
            <li className="nav-li">
              <a href="http://">Contribute</a>
            </li>
            <li className="nav-li">
              <a href="http://">About</a>
            </li>
          </ul>
        </nav>

        <div className="  grid justify-items-center py-16">
          <div className="py-4 back-logo">
            <img
              src={lg}
              alt="liquild GALAXY"
              className="back-logo w-60 h-60 py-3 my-2 "
            />
          </div>

          <input
            type="search"
            placeholder="Search"
            className="rounded-xl  w-96 h-11 text-black px-2 focus:outline-none"
          />
          <p className=" font-bold text-center text-2xl py-3 my-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book . It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. <br />
            Go read our unique post at Coding Internships
          </p>
        </div>

        {/* <!-- contributer card info --> */}
        <div>
          <Contribute />
        </div>

        <div className="w-full  bottom-0 ">
          <div className="space-x-40  px-20 py-6 ">
            <a
              href="mailto:liquildgalaxylab@gmail.com"
              className=" mx-auto  block text-center pb-10"
            >
              <i className="fa fa-envelope"> liquidgalaxylab@gmail.com</i>
            </a>

            <a href="http://liquidgalaxy.eu">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href="http://liquidgalaxy.eu">
              <i className="fa-brands fa-discord fa-2xl"></i>
            </a>
            <a href="http://liquidgalaxy.eu">
              {" "}
              <i className="fa-brands fa-github fa-2xl"></i>
            </a>
            <a href="http://liquidgalaxy.eu">
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a href="http://liquidgalaxy.eu">
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </a>
            <a href="http://liquidgalaxy.eu">
              <i className="fa-brands fa-google-play fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
