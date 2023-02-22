//wraps the li and ul
//styling purpose
import classes from './Card.module.css';
export default function Card(props) {
  const style = `${classes.card} ${props.className}`;
  return <div className={style}>{props.children}</div>;
}
