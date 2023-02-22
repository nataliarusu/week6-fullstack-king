//individual fruit page
//more info on the fruit like description, price and add to cart option
//need to import image

import Image from 'next/image';
import Button from './Button';
import ctx from '@/store/ctx-obj';
import React from 'react';
import { useContext } from 'react';

export default function Fruitpage(props) {
  const cartCTX = useContext(ctx);
  const addToBasket = () => {
    console.log('added to basket ', props);

    cartCTX.addItem(props);
  };
  return (
    <>
      <h1>{props.title}</h1>
      <div>
        <Image
          src={props.image_path}
          alt={props.title}
          width="300"
          height="300"
        />
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <p>£ {props.price}</p>
      </div>
      <Button onClick={addToBasket}>Add to Cart</Button>
    </>
  );
}
