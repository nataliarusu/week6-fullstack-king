import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import ctx from '@/store/ctx-obj';
import classes from './FruitItem.module.css';
import Card from './UI/Card';
import FruitItemForm from './FruitItemForm';

export default function FruitItem(props) {
  const cartCTX = useContext(ctx);

  const AddToCartHandler = () => {
    cartCTX.addItem(props);
  };

  return (
    <li className={classes.fruitlistitem} id={props.id}>
      <Card>
        <h3 className={classes.heading}>{props.title}</h3>
        <div>
          <div>
            <Image
              src={props.image}
              alt={props.title}
              width="150"
              height="150"
            />
          </div>
          <p>£ {props.price.toFixed(2)}</p>
        </div>
        <div>
          <Link className={classes.info} href={props.link}>
            More info...
          </Link>
        </div>
        <FruitItemForm onAddToCart={AddToCartHandler} id={props.id} />
      </Card>
    </li>
  );
}
