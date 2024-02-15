import "./Contributor.css";
import contributors from "./ImageList.js";

export default function Contributor() {
  return (
    <div className="pic-gallery">
      <label className="font-semibold mb-16 block text-3xl capitalize">
        {" "}
        contributors
      </label>

      <div className="pic">

        {contributors.map((item) => {
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
