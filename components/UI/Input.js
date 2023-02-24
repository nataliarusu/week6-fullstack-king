import { getStaticProps } from '@/pages';
import classes from './Input.module.css';

function Input(props) {
  const style = `${classes.input} ${props.className}`;
  return (
    <div className={style}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
}

export default Input;

//{...props.input}  => input = {type:'', name:''} in props and it will be converted into
//<input type='' name=''/>, so we can add flexible amount of properties to the input
