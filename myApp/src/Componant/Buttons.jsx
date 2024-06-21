
import "./Button.css"

import coffee1 from "../assets/coffee1.svg"
import coffee2 from "../assets/coffee2.svg"
function Buttons(params) {
  return (
    <div className="btnDiv">
      <button className="btn">
        {" "}
        <img src={coffee1} alt="" /> Ice Coffee
      </button>
      <button className="btn">
        {" "}
        <img src={coffee2} alt="" /> Hot Coffee
      </button>
      <button className="btn">
        {" "}
        <img src={coffee1} alt="" /> Cappuccino
      </button>
      <button className="btn">
        {" "}
        <img src={coffee2} alt="" /> Espresso
      </button>
    </div>
  );
}

export default Buttons