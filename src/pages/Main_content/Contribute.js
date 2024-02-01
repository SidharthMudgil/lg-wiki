import './Contributor.css'
import Contributer from "../Main_content/image_list.js";


export default function Contribute() {

  const Nine = () => {
    const result = [];
    let Margin="";
    let chunkSize = 12;
    
    for (let startIndex = 0; startIndex < Contributer.length; ) {
      if (chunkSize === 12) {
        chunkSize++;
        Margin="firstpart";

      } else {
        
        Margin="secondpart";
        chunkSize--;
      }
  
      const chunk = Contributer.slice(startIndex, startIndex + chunkSize);

      result.push(
        <div  className={Margin} key={`${startIndex}`}>
          {chunk.map((item) => (
            <div className="container"  key={item.index}>
            
              <img src={item.path} alt={item.name} className="con " />
              <div className="label">
                <div className="text">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      );
   
      startIndex += chunkSize;
    }

    return result;
  };

  return <>{Nine()}</>;
}
