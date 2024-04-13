import React from "react";
function Order(props) { // The props could be destructured here.
    /*
    The component Order receives 'openHour' and 'closHour' properties here
    so we can destructure them as follows -

    function Order({openHour , closeHour})
    */ 
    return(
        <div className="order">
        <p>We're open till {props.closeHour}:00. {/* If destructured , we can directly use the openHour and closeHour properties without using the 'props' oject like this => <p> open till {closeHour}*/} 
         Come visit us or order online !! </p>
        <button className="btn">
            order
        </button>
         </div>
    );
}
export  default Order; 
