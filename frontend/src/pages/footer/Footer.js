import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full  bottom-0 footer">
        <label className="mx-auto  block text-center p-5 font-bold text-2xl capitalize">
          our team
        </label>

       <div className="capitalize  flex mx-auto">
            <p className="py-2  mx-auto">
              {" "}
              <a
                href="https://github.com/devtgadani"
                target="_blank"
                rel="noreferrer"
              >
                Dev gadani
              </a>
            </p>
            <p className="py-2  mx-auto">
              {" "}
              <a
                href="https://github.com/SidharthMudgil"
                target="_blank"
                rel="noreferrer"
              >
                sidharth mudgil
              </a>
            </p>
      
            <p className="py-2  mx-auto">
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
    </>
  );
}
