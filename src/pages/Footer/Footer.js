import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full  bottom-0 footer  ">
        <label className='mx-auto  block text-center p-8 font-bold text-2xl capitalize'>contact us</label>

        <div className=' flex  flex-wrap '>

          <div className=' block mx-auto'>

            <a
              href="mailto:liquildgalaxylab@gmail.com"
              className="block py-4 "            >
              <i className="fa fa-envelope px-4 "></i>liquidgalaxylab@gmail.com
            </a>
            <a
              href="https://liquidgalaxy.eu" target='_blank'
              className="block  py-4  " rel="noreferrer"           >
              <i className="fa fa-globe px-4 "></i>www.liquidgalaxylab.eu
            </a>
            <div className="icon flex px-4 py-4 space-x-4 ">


              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-discord fa-xl"></i>
              </a>
              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">

                <i className="fa-brands fa-github fa-xl"></i>
              </a>
              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="http://liquidgalaxy.eu" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-google-play fa-xl"></i>
              </a>
            </div>
          </div>

          <div className='capitalize block  mx-auto'>
            <p className='py-4'>Dev gadani</p>
            <p className='py-4'>sidhart mudgil </p>
            <p className='py-4'>arin </p>

          </div>
        </div>
        <label className=' mx-auto  block text-center p-8 font-bold text-xl capitalize'>contribute  to liquidgalaxy</label>

      </div>


    </>
  )
}

