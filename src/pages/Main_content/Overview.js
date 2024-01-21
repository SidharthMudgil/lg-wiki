import React from 'react';
import "./overview.css";
import logo from  "../lg.png";

function Overview() {
  return (
    <div className='overview'> 
        <div className='overview-text-box'>
        <div className='overview-text '>Lorem ipsum dolor sit amet consectetur. Duis dui sed quam iaculis eget. Consectetur in sapien pellentesque massa. Non ut facilisi nunc cras orci. Vehicula elit sagittis lacus pharetra nulla elementum in ac suspendisse. Nisi ac tristique in quis ac.
        </div></div>
      
        <div className='overview-image'>
            <img src={logo} className='w-full h-full' />
            </div>

            <div className='overview-image'>
            <img src={logo} className='w-full h-full' />
            </div>

            <div className='overview-text-box'>
        <div className='overview-text '>Lorem ipsum dolor sit amet consectetur. Duis dui sed quam iaculis eget. Consectetur in sapien pellentesque massa. Non ut facilisi nunc cras orci. Vehicula elit sagittis lacus pharetra nulla elementum in ac suspendisse. Nisi ac tristique in quis ac.
        </div></div>
     
       </div>
  )
}

export default Overview