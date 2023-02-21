import Image from 'next/image';
import Link from 'next/link';

export default function FruitItem(props) {
  return (
    <li id={props.key}>
      <h3>{props.title}</h3>
      <div>
        <div>
          <Image src={props.image} alt={props.title} />
        </div>
        <p>£ {props.price}</p>
      </div>
      <div>
        <Link href={props.link}>See more at {props.link}</Link>
      </div>
    </li>
  );
}
