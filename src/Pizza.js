import React from "react"
function Pizza(props) { 
  // If we had passed the props as an object like pizzaObj, the syntax would be like :

  /* For eg. 

  function  Pizza({pizzaObj}) {
  }

  */

  // Now we can use dot notation with pizzaObj instead of props to  access its properties.
  // for eg. <h3>{pizzaObj.name}</h3>
  
  // Remember there not much differnce in using 'props' or 'pizzaObj' object to acces the properties it 's just a matter of preference and readability

  
    // if(props.soldOut) {
    //   return null;
    // }


    return (
      <li className={`pizza ${props.soldOut ? "sold-out":""}` }>
        <img src={props.pizzaImage} alt={props.altText}/>
        <h3>{props.pizzaName}</h3>
        <div>
        <p>{props.pizzaIngredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.pizzaPrice}</span>
        </div> 
      </li>   
    ); 
    
  }
  

export default Pizza;