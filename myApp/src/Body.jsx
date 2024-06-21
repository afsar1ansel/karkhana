import Search from "./Componant/Search";
import "./Body.css";
import Items from "./Componant/Items";
import Cart from "./Cart";
import Buttons from "./Componant/Buttons";

function Body() {
  return (
    <div className="appBody">
      <div className="mainSection" >
     <Search />
     <Buttons />
     <Items />
      </div>
      <div className="cartSection">
      <Cart />
      </div>
    </div>
  );
}

export default Body;
