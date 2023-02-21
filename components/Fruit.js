//individual fruit page
//more info on the fruit like description, price and add to cart option
//need to import image 

import React from "react";
import Image from "next/image";

export default function Fruitpage({props}) {
    return (
        <>
       <h1>{props.title}</h1>
       <div>
        <Image src={props.image_path} alt={props.title}/>
        </div>
       <div>
        <p>
            {props.description}
        </p>
       </div>
       <div><p>{props.price}</p></div>
       {/* <Button /> for add to cart */}
       </>
    )
}


