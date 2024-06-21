import React from 'react'
import { useState, useEffect } from 'react'

import { myContext } from "../Context/Context"


let totalBody = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    height: "40px",
    
}

const subtotal ={
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    height: "40px",
   
}

function Total() {
    const [total, setTotal] = useState(0)
    const [discountTotal, setDiscountTotal] = useState(0)
    const {state, setState, detailsState, setDetailsState } = React.useContext(myContext)

    

    useEffect(() => {
        setTotal(state.reduce((acc, item) => acc + Number(item.price.slice(1)), 0))
        setDiscountTotal(state.reduce((acc, item) => acc + Number(item.price.slice(1)), 0) * 0.1)
    }, [state])

    return(
        <div style={totalBody} >
            <div style={subtotal} >
                <h2>Subtotal</h2>
                <h3>${total}</h3>
            </div>
            <div style={subtotal} >
                <h5>Discount (10%)</h5>
                <h5>-${discountTotal}</h5>
            </div>
            <div style={subtotal} >
                <h5>Gradually</h5>
                <h5>$0.00</h5>
            </div>
            <div style={subtotal} >
                <h2>Total</h2>
                <h3>${total-discountTotal}</h3>
            </div>
        </div>
    )

}


export default Total