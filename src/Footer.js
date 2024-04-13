import React from "react";
import Order from "./Order";
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
function Footer() {
    
    const isOpen = hour >= openHour && hour<=closeHour ? true : false;
    // console.log(isOpen);
    return (
        <div>
        
        {/* below we are only going to render the list when there are some pizzas in the our array
        that is why we are checking for the condition. It can be done either using short
        circuiting or by using ternary operator. */}

            <footer className="footer">
            {isOpen ? ( <Order openHour={openHour} closeHour={closeHour} />
        
             ): <p> We will be happy to serve you between {openHour}:00 to {closeHour}:00</p>}

            
            </footer>
            
        </div>
    )
}


export default Footer;
