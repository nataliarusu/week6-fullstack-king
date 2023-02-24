import Button from './UI/Button';
import Input from './UI/Input';
import classes from './FruitItemForm.module.css';

export default function FruitItemForm(props) {
  const inputValues = {
    id: `numb-of-items-${props.id}`,
    type: 'number',
    name: 'numberOfItems',
    min: 1,
    max: 10,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={classes.addItem}>
      <Input input={inputValues} label="" className={classes.input} />
      <Button type={'submit'} onClick={props.onAddToCart}>
        Add
      </Button>
    </form>
  );
}
