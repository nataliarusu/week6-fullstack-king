import CartContext from './ctx-obj';
import { useReducer } from 'react';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems;
    const fruitInCart = state.items.find(
      (fruit) => fruit.id === action.value.id
    );
    const fruit = { ...action.value };

    if (fruitInCart) {
      fruitInCart.amount += action.value.amount;
      updatedItems = [...state.items];
    } else {
      updatedItems = [...state.items, fruit]; //returns new array
    }
    const updatedTotalAmount = state.totalAmount + fruit.price * fruit.amount;
    return {
      //new state
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
  }
  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', value: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', value: id });
  };
  const cartCTX = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartCTX}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
