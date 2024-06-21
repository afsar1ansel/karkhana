import "./Cart.css"
import CartItem from "./Componant/CartItem"
import DisplayName from "./Componant/DisplayName"
import Total from "./Componant/Total"

const lineDiv ={
    width: "100%",
    height: "1px",
    backgroundColor: "lightgray",
    margin: "10px 0px"
}

function Cart() {

    return(
        <div className="cart" >
            <DisplayName />
            <CartItem />
            <div style={lineDiv} ></div>
            <Total />
        </div>
    )
}

export default Cart