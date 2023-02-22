import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import React, { useContext } from 'react';
import ctx from '@/store/ctx-obj';

export default function FruitItem(props) {
  const cartCTX = useContext(ctx);

  const AddToBasketHandler = () => {
    cartCTX.addItem(props);
  };

  return (
    <li id={props.id}>
      <h3>{props.title}</h3>
      <div>
        <div>
          <Image src={props.image} alt={props.title} width="40" height="40" />
        </div>
        <p>£ {props.price}</p>
      </div>
      <div>
        <Link href={props.link}>See more at {props.title}</Link>
      </div>
      <Button onClick={AddToBasketHandler}>Add to Cart</Button>
    </li>
  );
}
