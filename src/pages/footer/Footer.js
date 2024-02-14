import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full  bottom-0 footer  ">
        <label className="mx-auto  block text-center p-8 font-bold text-2xl capitalize">
          contact us
        </label>

        <div className=" flex  flex-wrap ">
          <div className=" block mx-auto">

            {/* all link for liquid galaxy  */}

            <a href="mailto:liquildgalaxylab@gmail.com" className="block py-4 ">
              <i className="fa fa-envelope px-4 "></i>liquidgalaxylab@gmail.com
            </a>
            <a
              href="https://liquidgalaxy.eu"
              target="_blank"
              className="block  py-4  "
              rel="noreferrer"
            >
              <i className="fa fa-globe px-4 "></i>www.liquidgalaxy.eu
            </a>
            <div className="icon flex px-4 py-4 space-x-4 ">
              <a href="https://www.instagram.com/_liquidgalaxy" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="https://discord.gg/peGA5K8tJU" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-discord fa-xl"></i>
              </a>
              <a href="https://github.com/LiquidGalaxyLAB" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCHS7-kQP2FLKQ-lKMeHeS0Q" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a href="https://twitter.com/_liquidgalaxy" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="https://play.google.com/store/apps/developer?id=Liquid+Galaxy+LAB" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-google-play fa-xl"></i>
              </a>
            </div>
          </div>

          {/* link for contributor in Lg-Wiki */}

          <div className="capitalize block mx-auto">
            <p className="py-2">
              {" "}
              <a
                href="https://github.com/SidharthMudgil"
                target="_blank"
                rel="noreferrer"
              >
                sidharth mudgil
              </a>
            </p>
            <p className="py-2">
              {" "}
              <a
                href="https://github.com/devtgadani"
                target="_blank"
                rel="noreferrer"
              >
                Dev gadani
              </a>
            </p>
            <p className="py-2">
              {" "}
              <a
                href="https://github.com/akoolarni"
                target="_blank"
                rel="noreferrer"
              >
                arin kulkarni
              </a>
            </p>
            <p className="py-2">
              {" "}
              <a
                href="https://github.com/vedantkingh"
                target="_blank"
                rel="noreferrer"
              >
                vedant singh
              </a>
            </p>
          </div>
        </div>
        <label className=" mx-auto  block text-center p-8 font-bold text-xl capitalize">
          contribute to liquid galaxy
        </label>
      </div>
    </>
  );
}
