import React, { useState } from "react";

function ProductCard(props) {
    //const [counter,setCounter] = useState(1);
    //const [name,setName] = useState("nav");
    // props is parent component child components are img,h1,p
   return (
    <div>
        <img src ={props.url} alt ="" />
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
   );
}

export default ProductCard;