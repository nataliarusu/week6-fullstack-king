//individual fruit page
//more info on the fruit like description, price and add to cart option
//need to import image

import Image from 'next/image';
import Button from './Button';

export default function Fruitpage(props) {
  const addToBasket = () => {
    console.log('added to basket ', props);
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
