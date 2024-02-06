import "./Contributor.css";
import contributer from "./ImageList.js";

export default function Contributor() {
  return (
    <div className="pic-gallery">
      <label className="font-semibold mb-16 block text-3xl capitalize">
        {" "}
        contributor
      </label>

      <div className="pic">
        {/* mapping the data from file  */}

        {contributer.map((item) => {
          return (
            <div className="img-container " key={item.index}>
              <img
                src={item.path}
                alt={item.name}
                className="img-contributor"
              />

              <div className="label">
                <div className="text">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
