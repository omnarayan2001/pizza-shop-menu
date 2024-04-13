import React from "react"
import Pizza from "./Pizza"
import pizzaData from "./data"

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const noOfPizzas = pizzas.length;
    
    return (
        <div className="menu">
            <h2>Our Menu</h2>


        {/* below we are only going to render the list when there are some pizzas in the our array
        that is why we are checking for the condition. It can be done either using short
        circuiting or by using ternary operator. */}
            
            
        {noOfPizzas > 0 ? (

            <>

            <p>Authentic Italian cuisine. 6 creative dishes to choose from.
            All from our stone oven , all organic, all delicious.</p>


                <ul className="pizzas">
                {pizzaData.map((pizza)=> {
                    return(
                        <Pizza 
                        pizzaImage= {pizza.photoName} 
                        pizzaName = {pizza.name}
                        pizzaIngredients = {pizza.ingredients}
                        pizzaPrice = {pizza.price}
                        soldOut = {pizza.soldOut}
                        key = {pizza.name} />    
                    
                          /* Alternatively , instead of passing each property individually as a prop to a child component as shown above , we can also 
                         pass the all the above properties as an object  into the child component.

                         For eg. <pizzaObj = {pizza} /> this will also works.
                        
                         Now in child component we can use the props as  follows:

                           <h3> {props.pizzaObj.name} </h3>
                           <h3> {props.pizzaObj.Ingredients}</h3>
                           
                        */                    
                    );
                     
                })}
            </ul>
             
            </>

            ):<p>We are still working on or menu. Please come back later.</p>}   
            
            {/* {noOfPizzas > 0 && (
                <ul className="pizzas">
                {pizzaData.map((pizza)=> {
                    return(
                        <Pizza 
                        pizzaImage= {pizza.photoName} 
                        pizzaName = {pizza.name}
                        pizzaIngredients = {pizza.ingredients}
                        pizzaPrice = {pizza.price}
                        key = {pizza.name} />            
                    );
                })}
            </ul>
            )} */}
            
           
            {/* 
            
            <Pizza
            pizzaImage={pizzaData[0].photoName}
            pizzaName={pizzaData[0].name}
            pizzaIngridents={pizzaData[0].ingredients}
            pizzaPrize={pizzaData[0].price}
            altText="focacciao" />

             */}


        </div>
        
    )
}

export default Menu;
