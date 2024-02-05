import './Contributor.css'
import contributer from './ImageList.js';



export default function Contributor() {

 ;

  return(<div className='pic-gallery'>
<label className='font-semibold mb-16 block text-3xl capitalize'> contributor</label>

  <div className="pic">
        {contributer.map((item)=>{
          return(
            
            <div className='img-container ' key={item.index}>
          <img src={item.path} alt={item.name} className='img-contributor' />
         
          <div className='label'><div className='text'>{item.name}</div   ></div>
          </div>
        )


        })}
        
</div>

</div>



  )
}

//   const Nine = () => {
//     const result = [];
//     let Margin = "";
//     let chunkSize = 12;

//     for (let startIndex = 0; startIndex < Contributer.length;) {
//       if (chunkSize === 12) {
//         chunkSize++;
//         Margin = "firstpart";

//       } else {

//         Margin = "secondpart";
//         chunkSize--;
//       }

//       const chunk = Contributer.slice(startIndex, startIndex + chunkSize);

//       result.push(
//         <div className={Margin} key={`${startIndex}`}>
//           {chunk.map((item) => (
//             <div className="container" key={item.index}>

//               <img src={item.path} alt={item.name} className="con " />
//               <div className="label">
//                 <div className="text">{item.name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       );

//       startIndex += chunkSize;
//     }

//     return result;
//   };

//   return <>{Nine()}</>;
// }
