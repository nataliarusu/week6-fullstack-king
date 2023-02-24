//individual fruit page
//more info on the fruit like description, price and add to cart option
//need to import image

import Image from 'next/image';
import FruitItemForm from './FruitItemForm';
import ctx from '@/store/ctx-obj';
import React from 'react';
import { useContext } from 'react';
import classes from './Fruit.module.css';

export default function Fruitpage(props) {
  const cartCTX = useContext(ctx);

  const AddToCartHandler = (amount) => {
    const item = { ...props, amount: Number(amount) };

    cartCTX.addItem(item);
  };
  return (
    <>
      <div className={classes.fruitpage}>
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
          <p>£ {props.price.toFixed(2)}</p>
        </div>
        <FruitItemForm onAddToCart={AddToCartHandler} id={props.id} />
      </div>
    </>
  );
}
