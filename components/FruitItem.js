import Image from 'next/image';

export default function FruitItem(props) {
  return (
    <li id={props.id}>
      <h3>{props.title}</h3>
      <div>
        <div>
          <Image src={props.image} alt={props.title} width="40" height="40" />
        </div>
        <p>£ {props.price}</p>
      </div>
      <div></div>
    </li>
  );
}
