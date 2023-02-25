import Button from './UI/Button';
import Input from './UI/Input';
import classes from './FruitItemForm.module.css';
import React, { useRef, useState } from 'react';

export default function FruitItemForm(props) {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
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
    const inputAmount = Number(amountInputRef.current.value.trim());
    if (inputAmount === 0 || inputAmount > 10) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(inputAmount);
  };

  return (
    <div>
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
      {!amountIsValid && <p>Please enter a valid amount 1 to 10.</p>}
    </div>
  );
}

//for custom components ref won't work, to read ref from real input element we should
//wrap Input component which returns input element with React.forwardRef( (props, ref )),
//in this case in UI/Input.js
