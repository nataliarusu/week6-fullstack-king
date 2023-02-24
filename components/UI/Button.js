//button
import classes from './Button.module.css';

export default function Button({ children, onClick, type, className }) {
  const style = `${classes.button} ${className}`;
  return (
    <button className={style} onClick={onClick} type={type && 'button'}>
      {children}
    </button>
  );
}
