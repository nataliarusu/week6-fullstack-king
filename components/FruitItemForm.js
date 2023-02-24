import Button from './UI/Button';
import Input from './UI/Input';
import classes from './FruitItemForm.module.css';
import React, { useRef } from 'react';

export default function FruitItemForm(props) {
  const amountInputRef = useRef();

  const inputValues = {
    id: `numb-of-items-${props.id}`,
    type: 'number',
    name: 'numberOfItems',
    min: 1,
    max: 10,
    step: 1,
    defaultValue: 1,
  };
  const addItemHandler = (event) => {
    event.preventDefault();
    const inputAmount = amountInputRef.current.value;
    props.onAddToCart(inputAmount);
  };

  return (
    <form className={classes.addItem}>
      <Input
        input={inputValues}
        label=""
        className={classes.input}
        ref={amountInputRef}
      />
      <Button type={'submit'} onClick={addItemHandler}>
        Add
      </Button>
    </form>
  );
}

//for custom components ref won't work, to read ref from real input element we should
//wrap Input component which returns input element with React.forwardRef( (props, ref )),
//in this case in UI/Input.js
